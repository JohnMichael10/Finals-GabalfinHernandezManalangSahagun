import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  selectedSegment: string = 'ingredients';

  selectedRecipeList: any[] = [];
  constructor(private router: Router,
    private toastController: ToastController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.selectedRecipeList.push(navigation.extras.state)
    }
    console.log(this.selectedRecipeList)
  }

  goBack(){
    this.router.navigate(['/recommend-recipe/recipe-list']);
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.target.value;
  }

  segmentProcess() {
    this.selectedSegment = 'nutrition_facts';
  }

  addToMyMealPlan(){
    const productID=this.selectedRecipeList[0]._links.self.href //productID
    const calories=this.selectedRecipeList[0].recipe.calories //calories
    // const mealType=this.selectedRecipeList[0].type //mealType

    const mealType= {

      label: this.selectedRecipeList[0].recipe.label,
      recipeID: this.selectedRecipeList[0]._links.self.href,
      recipeName: this.selectedRecipeList[0].type,
      calories: this.selectedRecipeList[0].recipe.calories,
      finished: false
    };


    if (mealType) { // Check if mealType is not empty
      this.dataService.addMealsPerDayByType('2022', '04', '04', mealType)
        .then(() => {
          console.log('Meal added successfully');
        })
        .catch((error) => {
          console.error('Error adding meal: ', error);
        });
    } else {
      console.error('Meal type is empty');
    }

    this.presentToast(this.getTruncatedText(this.selectedRecipeList[0].recipe.label, 10)+" is successfully added to your meal plan!")
    this.router.navigate(['/recommend-recipe/recipe-list']);
  }

  getTruncatedText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }



  // UTILITIES
  async presentToast(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'top', // You can change the position as needed ('top', 'middle', 'bottom')
      color: 'light', // You can change the color as needed
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
  
    toast.present();
  }
}