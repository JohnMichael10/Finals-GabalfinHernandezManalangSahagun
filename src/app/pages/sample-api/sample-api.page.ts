import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodapiService } from 'src/app/services/foodapi.service';

@Component({
  selector: 'app-sample-api',
  templateUrl: './sample-api.page.html',
  styleUrls: ['./sample-api.page.scss'],
})
export class SampleApiPage implements OnInit {

  searchQuery: string = '';
  searchResults: any[] = [];
  ngOnInit(){
    this.searchFood()
  }

  constructor(private foodapi: FoodapiService) { }

  searchFood(): void {
    if (this.searchQuery.trim() !== '') {
      this.foodapi.searchFood(this.searchQuery)
        .subscribe((response: any) => {
          this.searchResults = response.hints || [];
        });
    } else {
      this.searchResults = [];
    }
  }

}
