import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend-recipe',
  templateUrl: './recommend-recipe.page.html',
  styleUrls: ['./recommend-recipe.page.scss'],
})
export class RecommendRecipePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
