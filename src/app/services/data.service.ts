import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, deleteDoc, doc, docData, getAggregateFromServer, query, sum, updateDoc, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface habit {
  id?: string;
  label: string;
  datesChecked: string[];
}

export interface mealType {
  id?: string;
  label: string;
  recipeID: string;
  recipeName: string;
  calories: number;
  finished: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  async getTotalCalories() : Promise<number> {
    const mealsRef = collection(this.firestore, 'mealPlan');
    const snapshot = await getAggregateFromServer(mealsRef, {
      totalCalories: sum('calories')
    });
    return snapshot.data().totalCalories as number;
  }

  getMealsByDate(year: string, month: string, day: string): Observable<mealType[]> {
    const mealsRef = collection(this.firestore, `mealPlan/${year}/${month}/${day}/meals`);
    return collectionData(mealsRef, { idField: 'id' }) as Observable<mealType[]>;
  }

  getMealByType(year: string, month: string, day: string, mealType: string): Observable<mealType> {
    const mealsDocRef = doc(this.firestore, `mealPlan/${year}/${month}/${day}/meals/${mealType}`);
    return docData(mealsDocRef) as Observable<mealType>;
  }

  addMealsPerDayByType(year: string, month: string, day: string, mealType: mealType) {
    const mealsRef = collection(this.firestore, `mealPlan/${year}/${month}/${day}/meals`);
    return addDoc(mealsRef, mealType);
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
