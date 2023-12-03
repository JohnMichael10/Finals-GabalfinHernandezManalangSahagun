import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaloriePage } from './calorie.page';

describe('CaloriePage', () => {
  let component: CaloriePage;
  let fixture: ComponentFixture<CaloriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaloriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
