import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildBlogComponent } from './parent-child-blog.component';

describe('ParentChildBlogComponent', () => {
  let component: ParentChildBlogComponent;
  let fixture: ComponentFixture<ParentChildBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
