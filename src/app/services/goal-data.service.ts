import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalDataService {
  bmiStats={
    weight:0,
    height:0,
    bmi:0,
    status:"",
    target:0
  }

  constructor() { }
}
