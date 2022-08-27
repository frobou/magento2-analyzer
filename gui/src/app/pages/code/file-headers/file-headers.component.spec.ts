import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHeadersComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: FileHeadersComponent;
  let fixture: ComponentFixture<FileHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
