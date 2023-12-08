import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FoodapiService } from 'src/app/services/foodapi.service';

@Component({
  selector: 'app-recommend-recipe',
  templateUrl: './recommend-recipe.page.html',
  styleUrls: ['./recommend-recipe.page.scss'],
})
export class RecommendRecipePage implements OnInit {

  foodParams={
    allergens:['vegan'],
    dishType:['Main Course', 'Pancake']
  }
  mealPlan: { [key: string]: any } = {
    breakfast: ['bread', 'sandwiches'],
    lunch: ['main course'],
    dinner: ['main course'],
  };
  mealParams: { [key: string]: any } = {
    exclusion:[],
    preferences: [],
    diet: ['vegan','vegetarian']
  };
  
  constructor(
    private router: Router,
    public foodapi: FoodapiService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home']);
  }
  getAllergens(event:CustomEvent) {

    const selectedValues = event.detail.value as string[];

    if (selectedValues) {
      // Add selected values to the array
      this.foodParams.allergens = selectedValues;
    } else {
      // If no values selected, reset the array
      this.foodParams.allergens = [];
    }
    // this.foodParams.allergens.push(event.detail.value);
  }

  generateRecipe(){
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
    this.router.navigate(['/recommend-recipe/recipe-list'], {
      state: dataToPass
    });

    // this.router.navigate(['/recommend-recipe/recipe-list'], {
    //   queryParams: {
    //     data: JSON.stringify(this.foodParams)
    //   }
    // });
  } 





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

}
