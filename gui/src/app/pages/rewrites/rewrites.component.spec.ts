import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewritesComponent } from './rewrites.component';

describe('RewritesComponent', () => {
  let component: RewritesComponent;
  let fixture: ComponentFixture<RewritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
