import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from 'src/environments/environment';
import fakePlugins from '../../fake/fakePlugins';
import {isArray} from 'rxjs/internal-compatibility';
import {debounceTime} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  form: FormGroup;

  plugins: any = [];
  pluginsSource: any = [];
  pluginElements: any[] = [];
  totals = 0;

  acceptedTypes = ['after', 'before', 'around'];
  acceptedStatus = ['Sim', 'Não'];

  searchTerms = {
    module: '',
    type: [],
    status: [],
    method: '',
    classe: '',
  };

  filterModuleRegex = false;
  filterOriginMethodRegex = false;
  filterPluginClassRegex = false;
  statuses = ['Sim', 'Não'];
  pluginExample: string = `<type name="Magento\\Module\\Model\\SomeClass">
    <plugin name="my_plugin_distinct_name"
            type="Vendor\\Module\\Plugin\\Model\\SomeClassPlugin"/>
</type>`;

  constructor(private httpService: HttpService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      module: [''],
      originMethod: [''],
      pluginClass: [''],
      pluginType: [[]],
      status: [[]],
    });
    if (environment.production) {
      this.getPlugins();
    } else {
      this.arrangeData(fakePlugins);
    }
    this.createObservers();
  }

  private createObservers() {

    this.form.controls.module.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.module = data;
      if (!this.filterModuleRegex) {
        this.search();
      }
    });
    this.form.controls.originMethod.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.method = data;
      if (!this.filterOriginMethodRegex) {
        this.search();
      }
    });
    this.form.controls.pluginClass.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.classe = data;
      if (!this.filterPluginClassRegex && data) {
        this.search();
      }
    });
    this.form.controls.pluginType.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.type = data;
      this.search();
    });
    this.form.controls.status.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.status = data;
      this.search();
    });
  }

  private getPlugins() {
    this.httpService.getPlugins().subscribe(data => {
      this.arrangeData(data['plugins'] ? data : {});
    });
  }

  private arrangeData(data: Object) {
    this.totals = 0;
    Object.keys(data['plugins']).forEach(x => {
      this.plugins.push({
        module: x,
        data: this.getFormatedData(x, data['plugins'][x])
      });
    });
    this.pluginsSource = [...this.plugins];
    this.plugins = [...this.plugins];
    this.getTotalCount();
  }

  getFormatedData(module, data: any[]) {
    const allData = {};
    this.acceptedTypes.forEach(type => {
      data.forEach(dt => {
        if (dt[type]) {
          if (!allData[type]) {
            allData[type] = [];
          }
          allData[type]['open'] = false;
          allData[type] = [...allData[type], ...dt[type]];
        }
      });
    });
    return allData;
  }

  search() {
    let plugins = [...this.pluginsSource];

    if (this.searchTerms['module'].length > 0) {
      plugins = this.searchForModuleName(plugins, this.searchTerms['module'], this.filterModuleRegex);
    }
    if (this.searchTerms['type'].length > 0) {
      plugins = this.searchForPluginType(plugins, this.searchTerms['type']);
    }
    if (this.searchTerms['status'].length > 0) {
      plugins = this.searchForActive(plugins, this.searchTerms['status']);
    }
    if (this.searchTerms['method'].length > 0) {
      plugins = this.searchForFields(plugins, { criteria: 'origin.name', data: this.searchTerms['method'] }, this.filterOriginMethodRegex);
    }
    if (this.searchTerms['classe'].length > 0) {
      plugins = this.searchForFields(plugins, { criteria: 'origin.className', data: this.searchTerms['classe'] }, this.filterPluginClassRegex);
    }

    this.plugins = plugins.filter(m => Object.keys(m.data).length > 0);
    this.getTotalCount();
  }

  private getTotalCount() {
    this.totals = 0;
    this.plugins.forEach(module => {
      this.acceptedTypes.forEach(type => {
        if (module.data[type]) {
          this.totals += module.data[type].length;
        }
      });
    });
  }

  searchForModuleName(plugins: any[], data: string, regex = false) {
    if (regex) {
      const regex = new RegExp(data, 'im');
      return plugins.filter(x => regex.test(x.module));
    } else {
      return plugins.filter(x => x.module.toLowerCase().includes(data ? data.toLowerCase() : ''));
    }
  }

  searchForFields(plugins: any[], data: { criteria: string, data: string }, regex = false) {
    const pluginFilter = [];
    plugins.forEach(module => {
      const plug = {module: module.module, data: {}};
      this.acceptedTypes.forEach(type => {
        if (module.data[type]) {
          plug.data[type] = [];
          module.data[type].forEach(plugin => {
            const criteria = data.criteria.split('.');
            let field = plugin[data.criteria];
            if (isArray(criteria)) {
              field = plugin[criteria[0]][criteria[1]];
            }
            if (regex) {
              const regexp = new RegExp(data.data, 'img');
              if (regexp.test(field)) {
                plug.data[type].push(plugin);
              }
            } else {
              if (!field) {
                console.log(plugin);
              }
              if (field && field.toLowerCase().includes(data.data ? data.data.toLowerCase() : '')) {
                plug.data[type].push(plugin);
              }
            }
          });
          if (plug.data[type].length === 0) {
            delete plug.data[type];
          }
        }
      });
      if (Object.keys(plug.data).length > 0) {
        pluginFilter.push(plug);
      }
    });
    return pluginFilter;
  }

  private searchForPluginType(plugins: any[], data: string[]) {
    const plugFilter = [];
    plugins.forEach(module => {
      const plug = {module: module.module, data: {}};
      data.forEach(type => {
        if (module.data[type]) {
          plug.data[type] = [];
          module.data[type].forEach(plugin => {
            plug.data[type].push(plugin);
          });
          if (plug.data[type].length === 0) {
            delete plug.data[type];
          }
        }
      });
      if (Object.keys(plug.data).length > 0) {
        plugFilter.push(plug);
      }
    });
    return plugFilter;
  }

  private searchForActive(plugins: any[], data: any[]) {
    const pluginFilter = [];
    plugins.forEach(module => {
      const plug = {module: module.module, data: {}};
      this.acceptedTypes.forEach(type => {
        plug.data[type] = [];
        data.forEach(status => {
          const value = status === 'Sim' ? 1 : 0;
          if (module.data[type]) {
            module.data[type].forEach(plugin => {
              if (plugin.active === value) {
                plug.data[type].push(plugin);
              }
            });
          }
        });
        if (plug.data[type].length === 0) {
          delete plug.data[type];
        }
      });
      if (Object.keys(plug.data).length > 0) {
        pluginFilter.push(plug);
      }
    });
    return pluginFilter;
  }

  doClear() {
    this.form.patchValue({
      module: '',
      originMethod: '',
      pluginClass: '',
      pluginType: [],
      status: [],
    });
    this.plugins = [...this.pluginsSource];
    this.getTotalCount();
  }

  isFilterModuleRegex() {
    // if (this.filterModuleRegex) {
    this.form.get('module').setValue('');
    // }
    this.filterModuleRegex = !this.filterModuleRegex;
  }

  isFilterOriginMethodRegex() {
    // if (this.filterOriginMethodRegex) {
    this.form.get('originMethod').setValue('');
    // }
    this.filterOriginMethodRegex = !this.filterOriginMethodRegex;
  }

  isFilterPluginClassRegex() {
    // if (this.filterPluginClassRegex) {
    this.form.get('pluginClass').setValue('');
    // }
    this.filterPluginClassRegex = !this.filterPluginClassRegex;
  }

  searchForModuleRegex() {
    if (this.filterModuleRegex) {
      this.search();
    }
  }

  searchForFieldsRegex() {
    if (this.filterOriginMethodRegex || this.filterPluginClassRegex) {
      this.search();
    }
  }

}
