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

  searchResults: any[] = [];
  

  foodParams={
    query:'',
    diet:'high-protein',
    health:['vegan'],
    calories:'100+',
    dishType:''
  }
  ngOnInit(){
    this.searchFood()
  }


  constructor(private foodapi: FoodapiService) { }

  searchFood(): void {
    this.foodapi.searchFood(this.foodParams.query, this.foodParams.diet, this.foodParams.health, this.foodParams.calories,this.foodParams.dishType)
    .subscribe((response: any) => {
      this.searchResults = response.hints || [];
      console.log(response.hints)
    });
  }

}
