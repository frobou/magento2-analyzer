import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleComponent} from "./module/module.component";
import {WebApiComponent} from "./web-api/web-api.component";
import {CreatorsComponent} from "./creators.component";

const routes: Routes = [
  {
    path: '', component: CreatorsComponent, children: [
      {path: 'module', component: ModuleComponent, pathMatch: 'full'},
      {path: 'webapi', component: WebApiComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
