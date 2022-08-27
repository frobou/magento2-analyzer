import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

export interface DialogData {
  dispatchers: { file: string, name: string }[];
}

@Component({
  selector: 'app-dialog-dispatchers',
  templateUrl: './dialog-dispatchers.component.html',
  styleUrls: ['./dialog-dispatchers.component.scss']
})
export class DialogDispatchersComponent implements OnInit {

  form: FormGroup;
  dispatchers = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.dispatchers = this.data.dispatchers;
    this.form = this.fb.group({
      dispatcher: ['']
    });

    this.form.get('dispatcher').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      if (value) {
        this.dispatchers = this.data.dispatchers.filter(x => x.name.toLowerCase().includes(value.toLowerCase()));
      } else {
        this.dispatchers = this.data.dispatchers;
      }
    })
  }

  doClear() {
    this.dispatchers = [...this.data.dispatchers];
  }
}
