import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, habit, mealType } from 'src/app/services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {
  selectTabs: string;
  gaugeElement2: any;
  perleftElement2: any;
  gaugeValue: number;
  totalCalories: number = 1000; // Set your initial total calories
  currentCalories: number = 800; // Set your initial current calories

  selectedDate: string;
  year: string = '2023';
  month: string = '12';
  day: string = '9';

  habits: habit[] = [];
  meals: mealType[] = [];

  constructor(
    private router: ActivatedRoute, 
    private router2: Router,
    private dataService: DataService
    ) {
    this.router.queryParams.subscribe((params) =>{
      this.selectTabs = params['segment'] || 'History'; //Sets the default to History segment if none is selected
    })
    this.dataService.getMealsByDate(this.year, this.month, this.day).subscribe(res => {
      console.log(res);
      this.meals = res;
    })

    this.dataService.getHabits().subscribe(res => {
      console.log(res);
      this.habits = res;
    })
   }

  ngOnInit() {
    this.updateGauge();
  }

  dateChanged(){
    var dateFormat = this.selectedDate.split('T')[0].split("-", 3);
    this.year = dateFormat[0];
    this.month = dateFormat[1];
    this.day = dateFormat[2];
    console.log(this.meals);
  }

  // Customize the color based on gauge value and if passed max

  getGaugeColor() {
    if (this.gaugeValue <= 100) {
      return '#009578';
    } else {
      return 'red';
    }
  }

  getStrokeDashArray() {
    // Set the dash array to the circumference of the circle
    const circumference = 2 * Math.PI * 90; // Circumference of the circle
    return this.gaugeValue === 100 ? `${circumference}` : `${circumference} ${circumference}`;
  }

  getStrokeDashOffset() {
    // Calculate the dash offset based on the gauge value
    const circumference = 2 * Math.PI * 90; // Circumference of the circle
    const offset = this.gaugeValue === 100 ? 0 : (circumference * (100 - this.gaugeValue)) / 100;
    return `${offset}px`;
  }

  getPercentageLeft() {
    // Calculate the percentage needed to complete 100%
    const percentageLeft = 100 - this.gaugeValue;
    return percentageLeft >= 0 ? percentageLeft : 0;
  }

  updateGauge() {
    // Set the max gauge value based on the total calories
    const maxGaugeValue = (this.totalCalories / 1000) * 100;

    // Set the gauge value based on the current calories
    this.gaugeValue = (this.currentCalories / this.totalCalories) * maxGaugeValue;

  }

  goBack(){
    this.router2.navigate(['/checkprog']);
  }

}
