import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumManagementComponent } from './forum-management.component';

describe('ForumManagementComponent', () => {
  let component: ForumManagementComponent;
  let fixture: ComponentFixture<ForumManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
