import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  screenWidth:number
  swiper: any; // Declare a swiper variable

  currentDate:string
  currentTime: string

  introPage: boolean=true
  homePage: boolean=false
  constructor(
    private router: Router
  ){
    this.updateDateTime(); // Initial call to update date and time

    // Update date and time every second (1000 milliseconds)
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  goal(){
    this.router.navigate(['/goal']);
  }

  recommendRecipe(){
    this.router.navigate(['/recommend-recipe']);
  }

  checkprog(){
    this.router.navigate(['/checkprog']);
  }

  updateDateTime() {
    const now = new Date();

    // Get the current date in 'YYYY-MM-DD' format
    this.currentDate = now.toISOString().split('T')[0];

    // Format the time in 'hh:mm:ss AM/PM' format
    this.currentTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });
  }
  start(){
    this.homePage=true
    this.introPage=false
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
