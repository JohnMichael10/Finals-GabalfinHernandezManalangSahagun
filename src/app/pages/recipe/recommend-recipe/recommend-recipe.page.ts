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
    this.router.navigate(['/recommend-recipe/recipe-list'], {
      queryParams: {
        data: JSON.stringify(this.foodParams)
      }
    });
  }

}
