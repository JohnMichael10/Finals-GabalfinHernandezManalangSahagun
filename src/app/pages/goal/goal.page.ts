import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  goalPage: boolean = true;
  bmiPage: boolean = true;
  mealPage: boolean = true;
  nutritionPage: boolean = true;

  selectedStep: string = 'step1'; // Default selected segment

  bmiStats = {
    weight: 0,
    height: 0,
    bmi: 0,
    status: "",
    target: 0
  };

  isNormal: boolean = false;
  @ViewChild(IonModal) modal: IonModal;
  message = "hello";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    // Use the router to navigate back
    this.router.navigate(['/home']); // Adjust the route according to your application structure
  }

  clickBmiPage() {
    this.goalPage = false;
    this.bmiPage = true;
  }

  clickMealPage() {
    this.goalPage = false;
    this.mealPage = true;
  }

  clickNutritionPage() {
    this.goalPage = false;
    this.nutritionPage = true;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.bmiStats.weight, 'confirm');
    this.calculateBMI();
    this.calculateStatus(); //for displaying status
    this.clickBmiPage();
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

  calculateStatus() {
    if (this.bmiStats.bmi <= 18.5) {
      this.bmiStats.status = "Underweight";
    } else if (this.bmiStats.bmi <= 24.9) {
      this.bmiStats.status = "Normal";
      this.isNormal = true;
    } else if (this.bmiStats.bmi <= 30) {
      this.bmiStats.status = "Overweight";
    }
    if (this.bmiStats.bmi > 30) {
      this.bmiStats.status = "Obese";
    }
  }

  segmentChanged(event: CustomEvent) {
    this.selectedStep = event.detail.value;
  }
  
}