import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  useContent: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate(['code', route]);
  }

  showContent(show: boolean) {
    this.useContent = show;
  }
}
