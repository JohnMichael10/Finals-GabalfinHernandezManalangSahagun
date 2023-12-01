import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss'],
})
export class BmiComponent  implements OnInit {
  @Input() data: any;
  bmiStats={
    weight:0,
    height:0,
    bmi:0,
    status:"",
    target:0
  }

  isNormal:boolean=false
  @ViewChild(IonModal) modal: IonModal;
  message="hello"

  constructor() { }

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.bmiStats.weight, 'confirm');
    this.calculateBMI()
    this.calculateStatus() //for displaying status
  }

  calculateBMI() {
    if (this.bmiStats.weight && this.bmiStats.height) {
      // Convert height to meters
      const heightInMeters = this.bmiStats.height / 100; // assuming height is entered in cm

      // Calculate BMI using the formula: weight (kg) / (height (m))^2
      this.bmiStats.bmi = this.bmiStats.weight / (heightInMeters * heightInMeters);
      this.bmiStats.bmi = parseFloat(this.bmiStats.bmi.toFixed(2));

      this.bmiStats.target = 22 * Math.pow(heightInMeters, 2); // for target weight

    } else {
      // If weight or height is not provided
      this.bmiStats.bmi = null;
    }
  }


  calculateStatus(){
    if(this.bmiStats.bmi <=18.5){
      this.bmiStats.status="Underweight"
    }
    else if(this.bmiStats.bmi <=24.9){
      this.bmiStats.status="Normal"
      this.isNormal=true
    }
    else if(this.bmiStats.bmi <=30){
      this.bmiStats.status="Overweight"
    }
    if(this.bmiStats.bmi > 30){
      this.bmiStats.status="Obese"
    }


  }

}

