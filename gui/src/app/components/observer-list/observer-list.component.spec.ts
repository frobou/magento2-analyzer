import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverListComponent } from './observer-list.component';

describe('ObserverListComponent', () => {
  let component: ObserverListComponent;
  let fixture: ComponentFixture<ObserverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserverListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
