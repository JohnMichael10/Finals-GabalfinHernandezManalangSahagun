import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  selectedSegment: string = 'ingredients';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/recommend-recipe/recipe-list']);
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.target.value;
  }

  segmentProcess() {
    this.selectedSegment = 'process';
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

  process: any[] = [
    'process 1',
    'process 2',
    'process 3',
    'process 4',
    'process 5',
    'process 6',
    'process 7',
    'process 8',
    'process 9',
    'process 10',
    'process 11',
    'process 12',
    'process 13',
    'process 14',
  ]

  finishCooking(){
    // Will create splash screen to congratulate the user
    this.router.navigate(['/home']);
  }
}