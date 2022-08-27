import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigService} from '../../services/config.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DialogDispatchersComponent} from '../dialogs/dialog-dispatchers/dialog-dispatchers.component';

@Component({
  selector: 'app-observer-list',
  templateUrl: './observer-list.component.html',
  styleUrls: ['./observer-list.component.scss']
})
export class ObserverListComponent implements OnInit, OnChanges {

  @Input() observers;
  @Input() totals;
  @Input() dispatchs;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('paginator') paginator: MatPaginator;

  pageIndex = 0;
  pageLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100, 200];
  observersFilter = [];

  constructor(private sanitizer: DomSanitizer, private configService: ConfigService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.pageLength = this.observers.length;
    this.observersFilter = [...this.observers.slice(0, 10)];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.observers) {
      this.pageLength = changes.observers.currentValue.length;
      this.observersFilter = [...changes.observers.currentValue.slice(0, this.pageSize)];
      if (this.paginator) {
        this.paginator.firstPage();
      }
    }
  }

  getModuleObserverCount(data) {
    return data.length;
  }

  getObserverIsActive(active: boolean | number) {
    return active ? 'Sim' : 'Não';
  }

  sanitize(protocol: string, file: (successCallback: FileCallback, errorCallback?: ErrorCallback) => void, line: string, ide: string) {
    if (line) {
      line = ':' + line;
    }
    return this.sanitizer.bypassSecurityTrustUrl(`${protocol}${this.configService.resolveBasePath(ide)}${file}${line}`);
  }

  setPageSizeOptions(event) {
    this.observersFilter = [...this.observers.slice((event.pageIndex * event.pageSize), ((event.pageIndex + 1) * event.pageSize))];
    this.pageSize = event.pageSize;
  }

  openDialog() {
    this.dialog.open(DialogDispatchersComponent, {
      // height: '400px',
      // width: '600px',
      data: {
        dispatchers: this.dispatchs,
      },
    });
  }
}
