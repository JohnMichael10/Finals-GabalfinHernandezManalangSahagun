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

  ingredients: any[] = [
    'ingredient 1',
    'ingredient 2',
    'ingredient 3',
    'ingredient 4',
    'ingredient 5',
    'ingredient 6',
    'ingredient 7',
    'ingredient 8',
    'ingredient 9',
    'ingredient 10',
  ]

  nutrition_facts: any[] = [
    'nutrition fact 1',
    'nutrition fact 2',
    'nutrition fact 3',
    'nutrition fact 4',
    'nutrition fact 5',
    'nutrition fact 6',
    'nutrition fact 7',
    'nutrition fact 8',
    'nutrition fact 9',
    'nutrition fact 10',
    'nutrition fact 11',
    'nutrition fact 12',
    'nutrition fact 13',
    'nutrition fact 14',
  ]

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