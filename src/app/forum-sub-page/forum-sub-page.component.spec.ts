import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSubPageComponent } from './forum-sub-page.component';

describe('ForumSubPageComponent', () => {
  let component: ForumSubPageComponent;
  let fixture: ComponentFixture<ForumSubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumSubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
