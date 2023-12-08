import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  goalPage: boolean = true;
  bmiPage: boolean = false;
  mealPage: boolean = false;
  nutritionPage: boolean = false;

  // BMI
  bmiStats={
    weight:0,
    height:0,
    bmi:0,
    status:"",
    target:0
  }
  isNormal:boolean=false 
  // BMI


  // Meal planner

  mealPlan: { [key: string]: any } = {};
  mealParams: { [key: string]: any } = {
    exclusion:[],
    preferences: [],
    diet: []
  };


  // Utilities
  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }


  // Pages toggle
  clickBmiPage(){
    this.goalPage=false
    this.bmiPage=true
  }
  clickBmiBackButton(){
    this.goalPage=true
    this.bmiPage=false
  }
  clickMealPage(){
    this.goalPage=false
    this.mealPage=true
  }
  clickMealBackButton(){
    this.goalPage=true
    this.mealPage=false
  }
  clickNutritionPage(){
    this.goalPage=false
    this.nutritionPage=true
  }
  // Pages toggle


  // BMI
  calculateBMI() {
    if (this.bmiStats.weight && this.bmiStats.height) {
      // Convert height to meters
      const heightInMeters = this.bmiStats.height / 100; // assuming height is entered in cm

      // Calculate BMI using the formula: weight (kg) / (height (m))^2
      this.bmiStats.bmi = this.bmiStats.weight / (heightInMeters * heightInMeters);
      this.bmiStats.bmi = parseFloat(this.bmiStats.bmi.toFixed(2));

      this.bmiStats.target = 22 * Math.pow(heightInMeters, 2); // for target weight

    } else {
      // If weight or height is not provided
      this.bmiStats.bmi = null;
    }
  }
  calculateStatus(){
    if(this.bmiStats.bmi <=18.5){
      this.bmiStats.status="Underweight"
    }
    else if(this.bmiStats.bmi <=24.9){
      this.bmiStats.status="Normal"
      this.isNormal=true
    }
    else if(this.bmiStats.bmi <=30){
      this.bmiStats.status="Overweight"
    }
    if(this.bmiStats.bmi > 30){
      this.bmiStats.status="Obese"
    }


  }


  // Meal planner
  addMealInclusion(event: CustomEvent){
    this.mealPlan={}
    if(event.detail.value!=''){
      event.detail.value.forEach((item:string) => {
        this.mealPlan[item] = []
      });
      
    }
  }

  addConcern(event: CustomEvent, concern:string){
    if(event.detail.value!=''){
      event.detail.value.forEach((item: string) => {
        if(!this.mealParams[concern].includes(item)){
          this.mealParams[concern].push(item);
        }
      });
    }
  }
  keyExists(key: string): boolean {
    return key in this.mealPlan;
  }

  addBreakfast(breakfast: CustomEvent){
    this.mealPlan['breakfast']=[]
    if(breakfast.detail.value!=''){
      breakfast.detail.value.forEach((item:string) => {
        this.mealPlan['breakfast'].push(item)
      });
    }
  }

  addLunch(lunch: CustomEvent){
    this.mealPlan['lunch']=[]
    if(lunch.detail.value!=''){
      lunch.detail.value.forEach((item:string) => {
        this.mealPlan['lunch'].push(item)
      });
    }
  }

  addDinner(dinner: CustomEvent){
    this.mealPlan['dinner']=[]
    if(dinner.detail.value!=''){
      dinner.detail.value.forEach((item:string) => {
        this.mealPlan['dinner'].push(item)
      });
    }
  }

  mealPlanner(){
    // deleting empty keys
    Object.keys(this.mealPlan).forEach((key) => {
      if (Array.isArray(this.mealPlan[key]) && this.mealPlan[key].length === 0) {
          delete this.mealPlan[key];
      }
    });
    
    const dataToPass={
      mealPlan:this.mealPlan,
      mealParams:this.mealParams
    }
    this.router.navigate(['/goal/meal-plan'], {
      state: dataToPass
    });
  }
  // MEAL PLANNER

  // UTILITIES
  goBack() {
    // Use the router to navigate back
    this.router.navigate(['/home']); // Adjust the route according to your application structure
  }

  openBmiModal() {
    // Open the BMI modal
    this.modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.bmiStats.weight, 'confirm');
    this.calculateBMI()
    this.calculateStatus() //for displaying status
    this.clickBmiPage()
  }
  // UTILITIES
}