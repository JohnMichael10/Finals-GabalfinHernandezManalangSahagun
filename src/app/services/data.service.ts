import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface habit {
  id?: string;
  label: string;
  datesChecked: string[];
}

export interface mealPlanDay {
  breakfast?: mealType;
  lunch?: mealType;
  dinner?: mealType;
}

export interface mealType {
  recipeID: string;
  calories: number;
  finished: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getMealsByMonth(year: string, month: string): Observable<mealPlanDay[]> {
    const mealsRef = collection(this.firestore, `mealPlan/${year}/${month}`);
    return collectionData(mealsRef, { idField: 'id' }) as Observable<mealPlanDay[]>;
  }

  getMealsByDate(year: string, month: string, day: string): Observable<mealPlanDay> {
    const mealsDocRef = doc(this.firestore, `mealPlan/${year}/${month}/${day}`);
    return docData(mealsDocRef) as Observable<mealPlanDay>;
  }

  addMealsPerDay(year: string, month: string, day: mealPlanDay) {
    const mealsRef = collection(this.firestore, `mealPlan/${year}/${month}`);
    return addDoc(mealsRef, day);
  }

  getHabits(): Observable<habit[]> {
    const habitsRef = collection(this.firestore, 'habits');
    return collectionData(habitsRef, { idField: 'id' }) as Observable<habit[]>;
  }

  getHabitById(id: string): Observable<habit> {
    const habitsDocRef = doc(this.firestore, `habits/${id}`);
    return docData(habitsDocRef) as Observable<habit>;
  }

  addHabit(habit: habit) {
    const habitsRef = collection(this.firestore, 'habits');
    return addDoc(habitsRef, habit);
  }

  deleteHabit(habit: habit) {
    const habitDocRef = doc(this.firestore, `habits/${habit.id}`);
    return deleteDoc(habitDocRef);
  }

  updateHabit(habit: habit) {
    const habitDocRef = doc(this.firestore, `habits/${habit.id}`);
    return updateDoc(habitDocRef, { label: habit.label, datesChecked: habit.datesChecked });
  }
}
