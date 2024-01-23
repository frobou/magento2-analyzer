import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {HttpService} from "../../services/http.service";
import {debounceTime} from "rxjs/operators";
import fakeRewrites from "../../fake/fakeRewrites";

@Component({
  selector: 'app-rewrites',
  templateUrl: './rewrites.component.html',
  styleUrls: ['./rewrites.component.scss']
})
export class RewritesComponent implements OnInit {

  form: FormGroup;

  rewrites: any = [];
  dispatchs: string[] = [];
  rewritesSource: any = [];
  observerElements: any[] = [];
  totals = 0;

  filterModuleRegex = false;
  filterForClassRegex = false;
  filterTypeClassRegex = false;

  searchTerms = {
    module: '',
    type: [],
    status: [],
    forClass: '',
    typeClass: '',
  };
  statuses = ['Sim', 'Não'];
  typeList = ['Interface', 'Class'];

  rewriteExample: string = `<preference for="Magento\\Module\\Model\\SomeClass"
            type="Vendor\\Module\\Model\\Someclass"/>`;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      module: [''],
      forClass: [''],
      typeClass: [''],
      types: [[]],
      status: [[]],
    });
    if (environment.production) {
      this.getObservers();
    } else {
      this.arrangeData(fakeRewrites);
    }
    this.createObservers();
  }

  private getObservers() {
    this.httpService.getRewrites().subscribe(data => {
      this.arrangeData(data['rewrites'] ? data : {});
    });
  }

  private arrangeData(data: Object) {
    this.totals = 0;
    Object.keys(data['rewrites']).forEach(x => {
      if (data['rewrites'][x].length > 0) {
        data['rewrites'][x]['open'] = false;
        this.rewrites.push({
          module: x,
          data: data['rewrites'][x]
        });
      }
    });
    this.dispatchs = data['dispatchs'];
    this.rewritesSource = [...this.rewrites];
    this.rewrites = [...this.rewrites];
    this.getTotalCount();
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
    this.form.controls.forClass.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.forClass = data;
      if (!this.filterForClassRegex) {
        this.search();
      }
    });
    this.form.controls.typeClass.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.typeClass = data;
      if (!this.filterTypeClassRegex) {
        this.search();
      }
    });
    this.form.controls.types.valueChanges.subscribe(data => {
      this.searchTerms.type = data;
      this.search();
    });
    this.form.controls.status.valueChanges.subscribe(data => {
      this.searchTerms.status = data;
      this.search();
    });
  }

  private getTotalCount() {
    this.totals = 0;
    this.rewrites.forEach(module => {
      this.totals += module.data.length;
    })
  }

  search() {
    let rewrites = [...this.rewritesSource];
    if (this.searchTerms['module'].length > 0) {
      rewrites = this.searchForModuleName(rewrites, this.searchTerms['module'], this.filterModuleRegex);
    }

    if (this.searchTerms['status'].length > 0) {
      rewrites = this.searchForActive(rewrites, this.searchTerms['status']);
    }

    if (this.searchTerms['type'].length > 0) {
      rewrites = this.searchForType(rewrites, this.searchTerms['type']);
    }

    if (this.searchTerms['forClass'].length > 0) {
      rewrites = this.searchForFields(rewrites, { criteria: 'forClass', data: this.searchTerms['forClass'] }, this.filterForClassRegex);
    }

    if (this.searchTerms['typeClass'].length > 0) {
      rewrites = this.searchForFields(rewrites, { criteria: 'typeClass', data: this.searchTerms['typeClass'] }, this.filterTypeClassRegex);
    }

    this.rewrites = rewrites.filter(m => Object.keys(m.data).length > 0);
    this.getTotalCount();
  }

  searchForModuleName(rewrites: any[], data: string, regex = false) {
    if (regex) {
      const regexp = new RegExp(data, 'im');
      return rewrites.filter(x => regexp.test(x.module));
    } else {
      return rewrites.filter(x => x.module.toLowerCase().includes(data ? data.toLowerCase() : ''));
    }
  }

  private searchForFields(rewrites: any[], data: { criteria: string, data: string }, regex = false) {
    const rewritesFilter = [];
    rewrites.forEach(module => {
      const plug = {module: module.module, data: []};
      module.data.forEach(observer => {
        if (regex) {
          const regexp = new RegExp(data.data, 'img');
          if (regexp.test(observer[data.criteria])) {
            plug.data.push(observer);
          }
        } else {
          if (observer[data.criteria].toLowerCase().includes(data.data ? data.data.toLowerCase() : '')) {
            plug.data.push(observer);
          }
        }

      });
      if (plug.data.length > 0) {
        rewritesFilter.push(plug);
      }
    });
    return rewritesFilter;
  }

  doClear() {
    this.form.patchValue({
      module: [''],
      forClass: [''],
      typeClass: [''],
      types: [[]],
      status: [[]],
    });
    this.rewrites = [...this.rewritesSource];
    this.getTotalCount();
  }

  clearInput() {
    this.form.get('search').setValue('');
  }

  isFilterModuleRegex() {
    this.form.get('module').setValue('');
    this.filterModuleRegex = !this.filterModuleRegex;
  }

  isFilterDispatchRegex() {
    this.form.get('dispatch').setValue('');
    this.filterForClassRegex = !this.filterForClassRegex;
  }

  isFilterObserverNameRegex() {
    this.form.get('forClass').setValue('');
    this.filterTypeClassRegex = !this.filterTypeClassRegex;
  }

  isFilterTypeClassRegex() {
    this.form.get('typeClass').setValue('');
    this.filterTypeClassRegex = !this.filterTypeClassRegex;
  }

  private searchForActive(rewrites: any[], data: any[]) {
    const observerFilter = [];
    this.rewrites = [];
    rewrites.forEach(module => {
      const plug = {module: module.module, data: []};
      module.data.forEach(observer => {
        data.forEach(status => {
          const value = status === 'Sim' ? 1 : 0;
          if (observer.active === value) {
            plug.data.push(observer);
          }
        });
      });
      if (plug.data.length > 0) {
        observerFilter.push(plug);
      }
    });
    return observerFilter;
  }

  private searchForType(rewrites: any[], data: any[]) {
    const observerFilter = [];
    this.rewrites = [];
    rewrites.forEach(module => {
      const plug = {module: module.module, data: []};
      module.data.forEach(observer => {
        data.forEach(status => {
          console.log(status)
          if (observer.type === status) {
            plug.data.push(observer);
          }
        });
      });
      if (plug.data.length > 0) {
        observerFilter.push(plug);
      }
    });
    return observerFilter;
  }

  searchForModuleRegex() {
    if (this.filterModuleRegex) {
      this.search();
    }
  }

  searchForFieldsRegex() {
    if (this.filterForClassRegex || this.filterTypeClassRegex) {
      this.search();
    }
  }

}
