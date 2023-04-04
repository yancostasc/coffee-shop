import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LastDaysCardsComponent } from "./last-days-cards.component";

describe("LastDaysCardsComponent", () => {
  let component: LastDaysCardsComponent;
  let fixture: ComponentFixture<LastDaysCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastDaysCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LastDaysCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
