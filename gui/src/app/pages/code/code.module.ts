import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CodeRoutingModule} from './code-routing.module';
import {CodeComponent} from './code.component';
import {HighlightPlusModule} from 'ngx-highlightjs/plus';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MaterialModule} from '../../modules/material/material.module';
import {FileHeadersComponent} from "./file-headers/file-headers.component";


@NgModule({
  declarations: [CodeComponent, FileHeadersComponent],
  imports: [
    CommonModule,
    CodeRoutingModule,
    HighlightPlusModule,
    ClipboardModule,
    MaterialModule
  ]
})
export class CodeModule { }
