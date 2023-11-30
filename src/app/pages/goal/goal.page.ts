import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  goalPage: boolean=false
  bmiPage: boolean=true
  constructor() { }

  ngOnInit() {
  }
  clickBmiPage(){

    this.goalPage=false
    this.bmiPage=true
  }

}
