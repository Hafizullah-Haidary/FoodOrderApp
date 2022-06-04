import { Component,OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

import { food } from 'src/app/shared/models/food';
// import { RatingComponent } from 'ng-starrating/lib/rating.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:food[]=[];

  constructor(private foodSerivce:FoodService, ActivatedRoute:ActivatedRoute) {
    let foodsObserable:Observable<food[]>;
    ActivatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      foodsObserable=this.foodSerivce.getAllFoodsSearch(params.searchTerm);
      else if(params.tag)
      foodsObserable=this.foodSerivce.getAllFoodsByTag(params.tag);

      else

      foodsObserable=this.foodSerivce.getAll();
      foodsObserable.subscribe((serverFoods)=>{
        this.foods=serverFoods;
      })
    });

  }

  ngOnInit(): void {
  }

}
