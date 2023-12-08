import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  selectedSegment: string = 'ingredients';

  selectedRecipeList: any[] = [];
  constructor(private router: Router) { }

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
    // Will create splash screen to congratulate the user
    this.router.navigate(['/home']);
  }

  getTruncatedText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
}