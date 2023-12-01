import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodapiService {
  
  apiUrl = 'https://api.edamam.com/api/food-database/v2/parser';
  appId = 'eb58a7fd';
  apiKey = '8e9f4db9641d5b48199d5900d063094a';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  searchFood(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
      .set('app_id', this.appId)
      .set('app_key', this.apiKey)
      .set('ingr', query)
      .set('nutrition-type', 'cooking');
    return this.http.get(`${this.apiUrl}`, { headers, params });
  }



  // MEAL PLANNER

}
