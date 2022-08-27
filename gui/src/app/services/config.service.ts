import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: any = {};

  constructor() { }

  resolveBasePath(ide: string) {
    if (!this.config!.paths) {
     return '';
    }
    switch (ide) {
      case 'vscode':
      case 'vscodium':
        return this.config.paths.vscode_base_path;
      case 'phpstorm':
        return this.config.paths.phpstorm_base_path;
    }
  }
}
