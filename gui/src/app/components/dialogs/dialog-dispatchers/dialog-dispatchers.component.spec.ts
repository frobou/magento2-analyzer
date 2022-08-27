import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDispatchersComponent } from './dialog-dispatchers.component';

describe('DialogDispatchersComponent', () => {
  let component: DialogDispatchersComponent;
  let fixture: ComponentFixture<DialogDispatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDispatchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDispatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
