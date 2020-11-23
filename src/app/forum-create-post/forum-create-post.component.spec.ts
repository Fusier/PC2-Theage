import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCreatePostComponent } from './forum-create-post.component';

describe('ForumCreatePostComponent', () => {
  let component: ForumCreatePostComponent;
  let fixture: ComponentFixture<ForumCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumCreatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
