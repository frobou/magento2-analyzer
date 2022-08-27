import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getPlugins() {
    return this.httpClient.get('assets/ma-plugins.json');
  }

  getObservers() {
    return this.httpClient.get('assets/ma-observers.json');
  }

  getRewrites() {
    return this.httpClient.get('assets/ma-rewrites.json');
  }
}
