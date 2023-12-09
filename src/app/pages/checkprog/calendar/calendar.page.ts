import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  selectTabs: string;
  gaugeElement2: any;
  perleftElement2: any;

  constructor(private router: ActivatedRoute, private router2: Router) {
    this.router.queryParams.subscribe((params) =>{
      this.selectTabs = params['segment'] || 'History'; //Sets the default to History segment if none is selected
    })
   }

  ngOnInit() {
    this.changeGaugeValue();
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
