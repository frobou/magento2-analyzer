import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {
  useContent: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showContent(show: boolean) {
    this.useContent = show;
  }
}
