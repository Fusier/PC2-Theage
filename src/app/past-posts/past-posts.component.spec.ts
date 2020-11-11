import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PastPostsComponent } from "./past-posts.component";

describe("PastPostsComponent", () => {
  let component: PastPostsComponent;
  let fixture: ComponentFixture<PastPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PastPostsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
