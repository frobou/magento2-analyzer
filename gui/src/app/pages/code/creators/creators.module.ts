import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreatorsRoutingModule} from './creators-routing.module';
import {CreatorsComponent} from './creators.component';
import {ModuleComponent} from "./module/module.component";
import {WebApiComponent} from "./web-api/web-api.component";
import {HighlightPlusModule} from "ngx-highlightjs/plus";
import {MaterialModule} from "../../../modules/material/material.module";


@NgModule({
  declarations: [CreatorsComponent, ModuleComponent, WebApiComponent],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    HighlightPlusModule,
    MaterialModule,
  ]
})
export class CreatorsModule {
}
