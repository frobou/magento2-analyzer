import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";
import {MatPaginator} from "@angular/material/paginator";
import {DomSanitizer} from "@angular/platform-browser";
import {ConfigService} from "../../services/config.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-rewrite-list',
  templateUrl: './rewrite-list.component.html',
  styleUrls: ['./rewrite-list.component.scss']
})
export class RewriteListComponent implements OnInit {

  @Input() rewrites;
  @Input() totals;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('paginator') paginator: MatPaginator;

  pageIndex = 0;
  pageLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100, 200];
  rewritesFilter = [];

  constructor(private sanitizer: DomSanitizer, private configService: ConfigService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.pageLength = this.rewrites.length;
    this.rewritesFilter = [...this.rewrites.slice(0, 10)];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rewrites) {
      this.pageLength = changes.rewrites.currentValue.length;
      this.rewritesFilter = [...changes.rewrites.currentValue.slice(0, this.pageSize)];
      if (this.paginator) {
        this.paginator.firstPage();
      }
    }
  }

  getModuleRewriteCount(data) {
    return data.length;
  }

  getRewriteIsActive(active: boolean | number) {
    return active ? 'Sim' : 'Não';
  }

  sanitize(protocol: string, file: (successCallback: FileCallback, errorCallback?: ErrorCallback) => void, line: string, ide: string) {
    if (line) {
      line = ':' + line;
    }
    return this.sanitizer.bypassSecurityTrustUrl(`${protocol}${this.configService.resolveBasePath(ide)}${file}${line}`);
  }

  setPageSizeOptions(event) {
    this.rewritesFilter = [...this.rewrites.slice((event.pageIndex * event.pageSize), ((event.pageIndex + 1) * event.pageSize))];
    this.pageSize = event.pageSize;
  }

}
