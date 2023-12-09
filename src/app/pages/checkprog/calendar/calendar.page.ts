import { Component, OnInit } from '@angular/core';
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
    this.changeGaugeValue();
  }

  dateChanged(){
    var dateFormat = this.selectedDate.split('T')[0].split("-", 3);
    this.year = dateFormat[0];
    this.month = dateFormat[1];
    this.day = dateFormat[2];
    console.log();
  }

  ionViewDidEnter(){
    this.changeGaugeValue();
  }

  changeGaugeValue(){
    // JS for Gauge movement
    this.gaugeElement2 = document.querySelector(".gauge2");
    this.perleftElement2 = document.querySelector(".encourage2");

    this.setGaugeValue(this.gaugeElement2, 0.3, this.perleftElement2); // use to change gauge percentage
  }

  setGaugeValue(gauge2: any, value2: number, perleft2: any) {
    if (value2 < 0 || value2 > 1) {
      return;
    }

    gauge2.querySelector(".gauge__fill2").style.transform = `rotate(${
      value2 / 2
    }turn)`; //moves the gauge bar
    gauge2.querySelector(".gauge__cover2").textContent = `${Math.round(
      value2 * 100
    )}%`; //changes text to percentage of progress
    perleft2.querySelector(".perleft2").textContent = `${Math.round(
      100 - (value2 * 100)
    )}%`;
  }

  goBack(){
    this.router2.navigate(['/checkprog']);
  }

}
