import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import fakeObservers from '../../fake/fakeObservers';
import {debounceTime} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.scss']
})
export class ObserversComponent implements OnInit {

  form: FormGroup;

  observers: any = [];
  dispatchs: string[] = [];
  observersSource: any = [];
  observerElements: any[] = [];
  totals = 0;

  filterModuleRegex = false;
  filterDispatchRegex = false;
  filterObserverNameRegex = false;
  filterObserverClassRegex = false;

  searchTerms = {
    module: '',
    status: [],
    dispatch: '',
    observerName: '',
    observerClass: '',
  };
  statuses = ['Sim', 'Não'];

  observerExample = `<event name="an_event_dispatcher_from_some_module">
    <observer name="my_observer_distinct_name"
              instance="Vendor\\Module\\Observer\\SomeClassObserver"/>
</event>`;

  constructor(private httpService: HttpService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      module: [''],
      dispatch: [''],
      observerName: [''],
      observerClass: [''],
      status: [[]],
    });
    if (environment.production) {
      this.getObservers();
    } else {
      this.arrangeData(fakeObservers);
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
    this.form.controls.dispatch.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.dispatch = data;
      if (!this.filterDispatchRegex) {
        this.search();
      }
    });
    this.form.controls.observerName.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.observerName = data;
      if (!this.filterObserverNameRegex) {
        this.search();
      }
    });
    this.form.controls.observerClass.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchTerms.observerClass = data;
      if (!this.filterObserverClassRegex) {
        this.search();
      }
    });
    this.form.controls.status.valueChanges.subscribe(data => {
      this.searchTerms.status = data;
      this.search();
    });
  }

  private getObservers() {
    this.httpService.getObservers().subscribe(data => {
      this.arrangeData(data['observers'] ? data : {});
    });
  }

  private arrangeData(data: Object) {
    this.totals = 0;
    Object.keys(data['observers']).forEach(x => {
      if (data['observers'][x].length > 0) {
        data['observers'][x]['open'] = false;
        this.observers.push({
          module: x,
          data: data['observers'][x]
        });
      }
    });
    this.dispatchs = data['dispatchs'];
    this.observersSource = [...this.observers];
    this.observers = [...this.observers];
    this.getTotalCount();
  }

  private getTotalCount() {
    this.totals = 0;
    this.observers.forEach(module => {
      this.totals += module.data.length;
    })
  }

  searchForModuleName(observers: any[], data: string, regex = false) {
    if (regex) {
      const regexp = new RegExp(data, 'im');
      return observers.filter(x => regexp.test(x.module));
    } else {
      return observers.filter(x => x.module.toLowerCase().includes(data ? data.toLowerCase() : ''));
    }
  }

  private searchForFields(observers: any[], data: { criteria: string, data: string }, regex = false) {
    const observersFilter = [];
    observers.forEach(module => {
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
        observersFilter.push(plug);
      }
    });
    return observersFilter;
  }

  doClear() {
    this.form.patchValue({
      module: '',
      dispatch: '',
      observerName: '',
      observerClass: '',
      status: [],
    });
    this.observers = [...this.observersSource];
    this.getTotalCount();
  }

  clearInput() {
    this.form.get('search').setValue('');
  }

  isFilterModuleRegex() {
    // if (this.filterModuleRegex) {
    this.form.get('module').setValue('');
    // }
    this.filterModuleRegex = !this.filterModuleRegex;
  }

  isFilterDispatchRegex() {
    // if (this.filterDispatchRegex) {
    this.form.get('dispatch').setValue('');
    // }
    this.filterDispatchRegex = !this.filterDispatchRegex;
  }

  isFilterObserverNameRegex() {
    // if (this.filterObserverNameRegex) {
    this.form.get('observerName').setValue('');
    // }
    this.filterObserverNameRegex = !this.filterObserverNameRegex;
  }

  isFilterObserverClassRegex() {
    // if (this.filterObserverClassRegex) {
    this.form.get('observerClass').setValue('');
    // }
    this.filterObserverClassRegex = !this.filterObserverClassRegex;
  }

  private searchForActive(observers: any[], data: any[]) {
    const observerFilter = [];
    this.observers = [];
    observers.forEach(module => {
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

  searchForModuleRegex() {
    if (this.filterModuleRegex) {
      this.search();
    }
  }

  searchForFieldsRegex() {
    if (this.filterDispatchRegex || this.filterObserverNameRegex || this.filterObserverClassRegex) {
      this.search();
    }
  }

  search() {
    let observers = [...this.observersSource];
    if (this.searchTerms['module'].length > 0) {
      observers = this.searchForModuleName(observers, this.searchTerms['module'], this.filterModuleRegex);
    }

    if (this.searchTerms['status'].length > 0) {
      observers = this.searchForActive(observers, this.searchTerms['status']);
    }

    if (this.searchTerms['dispatch'].length > 0) {
      observers = this.searchForFields(observers, { criteria: 'dispatch', data: this.searchTerms['dispatch'] }, this.filterDispatchRegex);
    }

    if (this.searchTerms['observerName'].length > 0) {
      observers = this.searchForFields(observers, { criteria: 'observerName', data: this.searchTerms['observerName'] }, this.filterObserverNameRegex);
    }

    if (this.searchTerms['observerClass'].length > 0) {
      observers = this.searchForFields(observers, { criteria: 'observerClass', data: this.searchTerms['observerClass'] }, this.filterObserverClassRegex);
    }

    this.observers = observers.filter(m => Object.keys(m.data).length > 0);
    this.getTotalCount();
  }
}
