import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CodeRoutingModule} from './pages/code/code-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import { PluginListComponent } from './components/plugin-list/plugin-list.component';
import {MaterialModule} from './modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { ObserverListComponent } from './components/observer-list/observer-list.component';
import { DialogDispatchersComponent } from './components/dialogs/dialog-dispatchers/dialog-dispatchers.component';
import { RewritesComponent } from './pages/rewrites/rewrites.component';
import { RewriteListComponent } from './components/rewrite-list/rewrite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginsComponent,
    ObserversComponent,
    NotFoundComponent,
    HomeComponent,
    PluginListComponent,
    FooterComponent,
    ObserverListComponent,
    DialogDispatchersComponent,
    RewritesComponent,
    RewriteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CodeRoutingModule,
    HighlightModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
          php: () => import('highlight.js/lib/languages/php'),
          json: () => import('highlight.js/lib/languages/json'),
          bash: () => import('highlight.js/lib/languages/bash'),
        },
        themePath: 'assets/styles/grayscale.css'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
