import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  goalPage: boolean=true
  bmiPage: boolean=false
  mealPage: boolean=false
  nutritionPage: boolean=false
  constructor() { }

  ngOnInit() {
  }
  clickBmiPage(){
    this.goalPage=false
    this.bmiPage=true
  }
  clickMealPage(){
    this.goalPage=false
    this.mealPage=true
  }
  clickNutritionPage(){
    this.goalPage=false
    this.nutritionPage=true
  }

}
