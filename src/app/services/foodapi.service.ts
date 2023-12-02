import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodapiService {
  foodApiUrl: 'https://api.edamam.com/api/recipes/v2'
  foodApiID: '0c3a13ae'
  foodApiKey: '0e1d22af14fc795ecc2470ae3192929a'
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  searchFood(
    query: string, 
    diet:string, 
    health:string[], 
    calories:string,
    dishType:string,
    ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const healthArray: string[] = health;

    let params = new HttpParams()
      .set('app_id', environment.foodApiID)
      .set('app_key', environment.foodApiKey)
      .set('type', 'public')
      .set('random', true)
      .set('q', 'Chicken')
      .set('diet', diet)
      .set('calories', calories)
      .set('cuisineType', 'Asian')
      .set('imageSize', 'SMALL')
      ;

    for (const healthItem of healthArray) {
      params = params.append('health', healthItem);
    }
    return this.http.get(`${environment.foodApiUrl}`, { headers, params });
  }


  recommendRecipe(
    health:string[],
    dishType:string[],
    ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    let params = new HttpParams()
      .set('app_id', environment.foodApiID)
      .set('app_key', environment.foodApiKey)
      .set('type', 'any')
      .set('q', 'Chicken')
      .set('random', true)
      ;

    for (const healthItem of health) {
      params = params.append('health', healthItem);
    }
    for (const dishTypeItem of dishType) {
      params = params.append('dishType', dishTypeItem);
    }
    return this.http.get(`${environment.foodApiUrl}`, { headers, params });
  }

  // returns breakfast meal plan
  getMealPlan(
    mealType:string, 
    // health:string[],
    // dietType:string[],
    dishType:string[],
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    let params = new HttpParams()
      .set('app_id', this.foodApiID)
      .set('app_key', this.foodApiKey)
      .set('type', 'any')
      .set('random', true)
      ;
    for (const dish of dishType) {
      params = params.append('dishType', dish);
    }
    return this.http.get(`${environment.foodApiUrl}`, { headers, params });
  }

}
