import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FoodapiService } from 'src/app/services/foodapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {

  items:string[]=["","",""]
  foodParams={
    allergens:[''],
    dishType:['']
  }
  recipeList: any[] = [];
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
    this.showResults()
  }

  showResults(){
    this.foodapi.recommendRecipe(this.foodParams.allergens, this.foodParams.dishType)
      .subscribe((response: any) => {
        this.recipeList = response.hits || [];
        console.log(response.hits)
    });
  }

  goBack(){
    this.router.navigate(['/recommend-recipe']);
  }

  cookingRecipe(){
    this.router.navigate(['/recommend-recipe/recipe']);
  }

}
