import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PluginsComponent} from './pages/plugins/plugins.component';
import {ObserversComponent} from './pages/observers/observers.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HomeComponent} from './pages/home/home.component';
import {RewritesComponent} from "./pages/rewrites/rewrites.component";


const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'plugins', component: PluginsComponent, pathMatch: 'full'},
      {path: 'observers', component: ObserversComponent, pathMatch: 'full'},
      {path: 'rewrites', component: RewritesComponent, pathMatch: 'full'},
      {path: 'code', loadChildren: () => import('./pages/code/code.module').then(m => m.CodeModule)},
    ]
  },
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
      useHash: true,
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
