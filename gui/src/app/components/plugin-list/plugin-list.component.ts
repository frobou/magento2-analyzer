import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigService} from '../../services/config.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-plugin-list',
  templateUrl: './plugin-list.component.html',
  styleUrls: ['./plugin-list.component.scss']
})
export class PluginListComponent implements OnInit {

  @Input() plugins;
  @Input() pluginTypes;
  @Input() totals;

  pageIndex = 0;
  pageLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100, 200];
  pluginsFilter = [];

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private sanitizer: DomSanitizer, private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.pageLength = this.plugins.length;
    this.pluginsFilter = [...this.plugins.slice(0, 10)];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.plugins) {
      this.pageLength = changes.plugins.currentValue.length;
      this.pluginsFilter = [...changes.plugins.currentValue.slice(0, this.pageSize)];
      if (this.paginator) {
        this.paginator.firstPage();
      }
    }
  }

  getModulePluginCount(data) {
    let totals = 0;
    this.pluginTypes.forEach(type => {
      if (data[type]) {
        totals += data[type].length;
      }
    });
    return totals;
  }

  sanitize(protocol: string, file: (successCallback: FileCallback, errorCallback?: ErrorCallback) => void, line: string, ide: string) {
    return this.sanitizer.bypassSecurityTrustUrl(`${protocol}${this.configService.resolveBasePath(ide)}${file}:${line}`);
  }

  getIsActive(active: boolean | number | ServiceWorker) {
    return active ? 'Sim' : 'Não';
  }

  setPageSizeOptions(event) {
    this.pluginsFilter = [...this.plugins.slice((event.pageIndex * event.pageSize), ((event.pageIndex + 1) * event.pageSize))];
    this.pageSize = event.pageSize;
  }

}
