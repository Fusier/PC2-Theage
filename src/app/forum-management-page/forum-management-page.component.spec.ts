import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumManagementPageComponent } from './forum-management-page.component';

describe('ForumManagementComponent', () => {
  let component: ForumManagementPageComponent;
  let fixture: ComponentFixture<ForumManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumManagementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
