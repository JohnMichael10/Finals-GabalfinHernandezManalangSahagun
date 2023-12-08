import { Component, Input, OnInit } from '@angular/core';
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
    this.showResults()
  }

  showResults(){
    this.foodapi.recommendRecipe(this.foodParams.allergens, this.foodParams.dishType)
      .subscribe((response: any) => {
        this.recipeList = response.hits || [];
        console.log(this.recipeList)
    });
  }

  goBack(){
    this.router.navigate(['/recommend-recipe']);
  }

  cookingRecipe(recipeIdx:number){

    this.router.navigate(['/recommend-recipe/recipe'], {
      state: this.recipeList[recipeIdx]
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
}
