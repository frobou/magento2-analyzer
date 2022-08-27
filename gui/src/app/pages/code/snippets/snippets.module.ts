import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SnippetsRoutingModule} from './snippets-routing.module';
import {SnippetsComponent} from './snippets.component';
import {HighlightPlusModule} from 'ngx-highlightjs/plus';
import {MaterialModule} from "../../../modules/material/material.module";


@NgModule({
  declarations: [SnippetsComponent],
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    HighlightPlusModule,
    MaterialModule,
  ]
})
export class SnippetsModule {
}
