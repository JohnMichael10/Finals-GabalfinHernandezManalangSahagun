import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularApiService {
  foodApiUrl: 'https://api.spoonacular.com/recipes/complexSearch'
  foodApiID: '0c3a13ae'
  foodApiKey: '0e1d22af14fc795ecc2470ae3192929a'
  
  constructor(
    private http: HttpClient
  ) { }


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
      .set('app_id', this.foodApiID)
      .set('app_key', this.foodApiKey)
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
    return this.http.get(`${this.foodApiUrl}`, { headers, params });
  }

}
