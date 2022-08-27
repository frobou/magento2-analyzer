import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodeComponent} from './code.component';
import {FileHeadersComponent} from './file-headers/file-headers.component';

const routes: Routes = [
  {path: '', component: CodeComponent, children: [
      {path: 'file-headers', component: FileHeadersComponent, pathMatch: 'full'},
      {path: 'creators', loadChildren: () => import('./creators/creators.module').then(m => m.CreatorsModule)},
      {path: 'snippets', loadChildren: () => import('./snippets/snippets.module').then(m => m.SnippetsModule)},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
