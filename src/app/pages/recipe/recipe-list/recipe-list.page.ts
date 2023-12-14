import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodapiService } from 'src/app/services/foodapi.service';
import { Router } from '@angular/router';
import { catchError, forkJoin } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {
  mealPlan: { [key: string]: any } = {
  };
  mealParams: { [key: string]: any } = {
    exclusion:[],
    preferences: [],
    diet: []

  };
  apiDone: boolean=false
  apiCallPass: boolean=false



  items:string[]=["","",""]
  foodParams={
    allergens:[''],
    dishType:['']
  }
  recipeList: any[] = [];
  
  @Input() percentage: number = 0; // Input property to receive the percentage
  @Input() iconName: string = 'your-icon-name'; // Input property for the icon name

  constructor(
    private foodapi:FoodapiService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.queryParams.subscribe(params => {
      if (params && params['data']) {
        this.foodParams = JSON.parse(params['data']);
        // Use receivedArray as needed
      }
    });
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.mealPlan=navigation.extras.state['mealPlan']
      this.mealParams=navigation.extras.state['mealParams']
    }
    this.getMeal()
  }

  // showResults(){
  //   this.foodapi.recommendRecipe(this.foodParams.allergens, this.foodParams.dishType)
  //     .subscribe((response: any) => {
  //       this.recipeList = response.hits || [];
  //       console.log(this.recipeList)
  //   });
  // }

  goBack(){
    this.router.navigate(['/recommend-recipe']);
  }

  cookingRecipe(type:string,recipeIdx:number){
    this.mealPlan[type][recipeIdx].type=type
    this.router.navigate(['/recommend-recipe/recipe'], {
      state: this.mealPlan[type][recipeIdx]
    });
  }

  getColor(): string {
    const percentage = this.percentage > 100 ? 100 : (this.percentage < 0 ? 0 : this.percentage);
    const color = percentage === 100 ? 'green' : 'gray'; // Modify colors as needed
    return `linear-gradient(to right, ${color} ${percentage}%, gray ${percentage}%`;
  }

  getTruncatedText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }


  
  transformObjectToArray(): any[] {
    return Object.values(this.mealPlan);
  }


  // DISPLAYING ALL DATA
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
