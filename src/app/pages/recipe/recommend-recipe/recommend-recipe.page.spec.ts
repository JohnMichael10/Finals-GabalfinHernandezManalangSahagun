import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendRecipePage } from './recommend-recipe.page';

describe('RecommendRecipePage', () => {
  let component: RecommendRecipePage;
  let fixture: ComponentFixture<RecommendRecipePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(RecommendRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
