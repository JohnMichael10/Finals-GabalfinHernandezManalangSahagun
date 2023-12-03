import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const datesElement = document.getElementById('dates');
    const monthYearElement = document.getElementById('monthYear');
    const prevbtn = document.getElementById('prevbtn');
    const nextbtn = document.getElementById('nextbtn');
    

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
      monthYearElement.textContent = monthYearString;
      
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
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
      }
      //for next month days
      for(let i = 1; i <= 6 - lastDayIndex; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
      }

      datesElement.innerHTML = datesHTML;
    }
    prevbtn.addEventListener('click', () =>{
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendar();
    })
    nextbtn.addEventListener('click', () =>{
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendar();
    })

    updateCalendar();
  }

}
