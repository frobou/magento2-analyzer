import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewriteListComponent } from './rewrite-list.component';

describe('RewriteListComponent', () => {
  let component: RewriteListComponent;
  let fixture: ComponentFixture<RewriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
