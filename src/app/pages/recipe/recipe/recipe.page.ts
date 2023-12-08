import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  selectedSegment: string = 'ingredients';

  selectedRecipeList: any[] = [];
  constructor(private router: Router,
    private toastController: ToastController) { }

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
    const mealType=this.selectedRecipeList[0].type //mealType

    this.presentToast(this.getTruncatedText(this.selectedRecipeList[0].recipe.label, 10)+" is successfully added to your meal plan!")
    this.router.navigate(['/recommend-recipe/recipe-list']);
  }

  getTruncatedText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
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