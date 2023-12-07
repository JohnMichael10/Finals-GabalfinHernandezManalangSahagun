import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkprog',
  templateUrl: './checkprog.page.html',
  styleUrls: ['./checkprog.page.scss'],
})
export class CheckprogPage {
  cells : any[] = [];
  dt = new Date();
  day: any;
  today: any;
  endDate: any;
  prevDate: any;

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  currentMonth: any;
  currentYear: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.renderDate();
  }

  ionViewWillEnter(){
    this.renderDate();
  }

  ionViewDidEnter(){
    this.renderDate();
  }

  renderDate(){
    this.cells = [];
    this.dt.setDate(1);
    this.day = this.dt.getDay();
    this.today = new Date().getDate();
    // console.log(this.today)
    // console.log(this.day)


    this.endDate = new Date(
      this.dt.getFullYear(),
      this.dt.getMonth()+1,
      0
    ).getDate();
    // console.log(this.endDate);

    this.prevDate = new Date(
      this.dt.getFullYear(),
      this.dt.getMonth(),
      0
    ).getDate();
    // console.log(this.prevDate);

    this.currentMonth = this.months[this.dt.getMonth()];
    // console.log(this.currentMonth);
    
    this.currentYear = this.dt.getFullYear();
    // console.log(this.currentYear);

    let i: any;
    let j: any;
    
    for(j = 1; j <= this.endDate; j++){
      let objData = {};
      let statusColor;

      let Daydate = new Date(this.currentYear, this.dt.getMonth(), j);
      let currDate = new Date();
      // console.log(currDate);
      // console.log(Daydate);

      if(currDate.toDateString() == Daydate.toDateString()){
        statusColor = true;
      } else {
        statusColor = false;
      }

      const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      const daysofWeekIndex = Daydate.getDay();
      const dayofWeek = daysofWeek[daysofWeekIndex];
      objData = {date: j, day: dayofWeek, isToday: statusColor}
      this.cells.push(objData);
      // console.log(this.cells);
      
    }

  }

  moveDate(para:any){
    if(para == "prev"){
      this.dt.setMonth(this.dt.getMonth() - 1);
    } else if(para == 'next'){
      this.dt.setMonth(this.dt.getMonth() + 1);
    }
    this.renderDate();
  }

  dateClicked(date:any){
    let clickedDate = new Date(this.currentYear, this.dt.getMonth(), date);
    console.log(clickedDate);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  goCalendar(){
    this.router.navigate(['/calendar']);
  }

}



