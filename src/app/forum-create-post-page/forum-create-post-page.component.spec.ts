import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCreatePostPageComponent } from './forum-create-post-page.component';

describe('ForumCreatePostComponent', () => {
  let component: ForumCreatePostPageComponent;
  let fixture: ComponentFixture<ForumCreatePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumCreatePostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCreatePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
