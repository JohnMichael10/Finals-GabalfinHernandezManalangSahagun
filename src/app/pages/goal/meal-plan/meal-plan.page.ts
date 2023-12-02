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

  overallMeal: { [key: string]: { breakfast: any, lunch: any, dinner: any } } = {};
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
      this.mealPlan=navigation.extras.state
    }
    this.getMeal()
  }

  

  factionMeals(){
    for (let i = 0; i < 5; i++) {
      this.overallMeal[i] = {
        breakfast: this.mealPlan['breakfast'][i],
        lunch: this.mealPlan['lunch'][i],
        dinner: this.mealPlan['dinner'][i]
      };
    }
    console.log(this.overallMeal)
  }
  
  transformObjectToArray(): any[] {
    const transformedArray = Object.keys(this.overallMeal).map(key => ({
      category: this.overallMeal[key]
    }));
    // console.log(transformedArray); // Logging the transformed object
    return transformedArray;
  }

  getMeal(): void {
    const mealType=Object.keys(this.mealPlan)
    const apiCalls = mealType.map(mealType =>
      this.foodapi.getMealPlan(mealType, this.mealPlan[mealType]).pipe(
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
        this.factionMeals();
        this.apiDone=true
      } else {
        console.log('Some API calls failed. Cannot proceed.');
      }
    });
  

 
  }
  // getBreakfast(): void{
  //   this.foodapi.getMealPlan('breakfast', this.mealPlan['breakfast'])
  //   .subscribe((response: any) => {
  //     this.mealPlan['breakfast'] = response.hits; //this works
  //     this.factionMeals()
  //   });
  // }
  // getLunch(): void{
  //   this.foodapi.getMealPlan('lunch', this.mealPlan['lunch'])
  //   .subscribe((response: any) => {
  //     this.mealPlan['lunch']= response.hits;
  //     this.factionMeals()
  //   });
  // }
  // getDinner(): void{
  //   this.foodapi.getMealPlan('dinner', this.mealPlan['dinner'])
  //   .subscribe((response: any) => {
  //     this.mealPlan['dinner']= response.hits;
  //     this.factionMeals()
  //   });
  // }



  chunkArray(arr: any[], chunkSize: number): any[][] {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }

}
