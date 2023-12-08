import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodapiService } from 'src/app/services/foodapi.service';
import { catchError } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.page.html',
  styleUrls: ['./meal-plan.page.scss'],
})
export class MealPlanPage implements OnInit {
 
  mealPlan: { [key: string]: any } = {
  };
  mealParams: { [key: string]: any } = {
    exclusion:[],
    preferences: [],
    diet: []

  };

  overallMeal: { [key: string]: any } = {};
  apiDone: boolean=false
  apiCallPass: boolean=false

  constructor(
    private router: Router,
    private foodapi:FoodapiService
  ) 
  { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.mealPlan=navigation.extras.state['mealPlan']
      this.mealParams=navigation.extras.state['mealParams']
    }
    this.getMeal()
  }

  
  
  transformObjectToArray(): any[] {
    const transformedArray = Object.keys(this.overallMeal).map(key => ({
      category: this.overallMeal[key]
    }));
    return transformedArray;
  }

  getMeal(): void {
    const mealType=Object.keys(this.mealPlan)
    const apiCalls = mealType.map(mealType =>
      this.foodapi.getMealPlan(mealType, this.mealParams['exclusion'].concat(this.mealParams['preferences']), this.mealParams['diet'], this.mealPlan[mealType]).pipe(
        catchError(error => {
          // Handle API call errors here
          return (null); // Return a fallback value or handle the error
        })
      )
    );

    forkJoin(apiCalls)
    .subscribe((responses: any[]) => {
      let allCallsSuccessful = true;
  
      responses.forEach((response, i) => {
        if (response !== null) {
          this.mealPlan[mealType[i]] = response.hits;
        }
      });
  
      if (allCallsSuccessful) {
        console.log(this.mealPlan)
        this.apiDone=true
      } else {
        console.log('Some API calls failed. Cannot proceed.');
      }
    });
  }
}
