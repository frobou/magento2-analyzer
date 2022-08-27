import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApiComponent } from './web-api.component';

describe('WebApiComponent', () => {
  let component: WebApiComponent;
  let fixture: ComponentFixture<WebApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
