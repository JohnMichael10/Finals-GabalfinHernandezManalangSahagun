import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkprog',
  templateUrl: './checkprog.page.html',
  styleUrls: ['./checkprog.page.scss'],
})
export class CheckprogPage {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Hello")
    // const daystag = document.querySelector(".days");

    // let date = new Date(),
    // currDay = date.getDay(),
    // currMonth = date.getMonth(),
    // currYear = date.getFullYear();

    // var first = date.getDate() - currDay; //First day of month
    // var last = first + 6; //Last day of month

    // var firstday = new Date(date.setDate(first)).toUTCString();
    // var lastday = new Date(date.setDate(last)).toUTCString();

    // console.log(first, last, firstday, lastday);
    // const renderCalendar = () => {
    //   let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // gets last date of the month
    //   let liTag = "";

    //   for (let i = 1; i <= lastDateofMonth; i++) {
    //     liTag += `<li>${i}</li>`; 
    //   }

    //   daystag.innerHTML = liTag;
    // }

    // renderCalendar();

    const datesElement = document.getElementById('dates');
    

    let currentDate = new Date();

    const updateCalendar = () => {
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      // const currentWeek = ;
      
      const firstDay = new Date(currentYear, currentMonth, 1); //1 so it starts on sunday, 0 if monday
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const totalDays = lastDay.getDate(); console.log(totalDays);
      const firstDayIndex = firstDay.getDay(); console.log(firstDayIndex);
      const lastDayIndex = lastDay.getDay();

      const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
      
      let datesHTML = '';
      //for previous month days
      for (let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
      }
      //for current month days and active date
      for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class=date ${activeClass}">${i}</div>`;
      }
      //for next month days
      for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
      }

      datesElement.innerHTML = datesHTML;
    }

    updateCalendar();

    // const datesElement = document.getElementById('dates');

    // let currentDate = new Date();

    // const updateCalendar = () => {
    //   const currentYear = currentDate.getFullYear();
    //   const currentMonth = currentDate.getMonth();

    //   const firstDay = new Date(currentYear, currentMonth, 0);
    //   const lastDay = new Date(currentYear, currentMonth + 1, 0);
    //   const totalDays = lastDay.getDate();
    //   const firstDayIndex = firstDay.getDay();
    //   const lastDayIndex = lastDay.getDay();

    //   const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    //   // monthYearElement.textContent = monthYearString;

    //   let datesHTML = '';

    //   for (let i = firstDayIndex; i > 0; i--){
    //     const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    //     datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    //   }

    //   for(let i = 1; i <= totalDays; i++){
    //     const date = new Date(currentYear, currentMonth, i);
    //     const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
    //     datesHTML += `<div class=date ${activeClass}">${i}</div>`;
    //   }

    //   for(let i = 1; i <= 7 - lastDayIndex; i++){
    //     const nextDate = new Date(currentYear, currentMonth + 1, i);
    //     datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    //   }

    //   datesElement.innerHTML = datesHTML;
    // }

    // updateCalendar();
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  

}



