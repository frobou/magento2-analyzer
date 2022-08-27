import {Component, HostBinding} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ConfigService} from './services/config.service';
import {HighlightLoader} from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);
  theme = 'github';
  defaultTheme = 'grayscale.css';
  darkClassName = 'darkMode';
  isDark = false;
  themes = [
    {label: 'Github', value: 'github', file: 'github-light.css', fileDark: 'github-dark.css'},
    {label: 'Google', value: 'google', file: 'google-light.css', fileDark: 'google-dark.css'},
    {label: 'Stackoverflow', value: 'stackoverflow', file: 'stackoverflow-light.css', fileDark: 'stackoverflow-dark.css'},
    {label: 'Grayscale', value: 'grayscale', file: this.defaultTheme, fileDark: this.defaultTheme}
  ];

  constructor(private httpClient: HttpClient, private router: Router, private overlay: OverlayContainer,
              private config: ConfigService, private hljsLoader: HighlightLoader) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.httpClient.get('assets/ma-gui-config.json').subscribe((data: any) => {
      this.config.config = data;
      this.theme = data.theme;
      this.isDark = data.dark_mode;
      if (data.dark_mode) {
        this.toggleControl.setValue(true);
      } else {
        this.changeTheme(this.theme);
      }
    });
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName : '';
      this.isDark = darkMode;
      this.changeTheme(this.theme);
    });
  }

  public changeTheme(theme: string) {
    this.theme = theme;
    const act = this.themes.filter(x => x.value === theme);
    if (act.length === 0) {
      this.theme = this.defaultTheme;
      act.push({label: '', value: '', file: this.defaultTheme, fileDark: this.defaultTheme});
    }
    if (this.isDark) {
      this.hljsLoader.setTheme(`assets/styles/${act[0].fileDark}`);
      this.overlay.getContainerElement().classList.add(this.darkClassName);
    } else {
      this.hljsLoader.setTheme(`assets/styles/${act[0].file}`);
      this.overlay.getContainerElement().classList.remove(this.darkClassName);
    }
  }
}
