import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsComponent } from './creators.component';

describe('CreatorsComponent', () => {
  let component: CreatorsComponent;
  let fixture: ComponentFixture<CreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
