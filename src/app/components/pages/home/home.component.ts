import { Component,OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

import { food } from 'src/app/shared/models/food';
// import { RatingComponent } from 'ng-starrating/lib/rating.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:food[]=[];

  constructor(private foodSerivce:FoodService, ActivatedRoute:ActivatedRoute) {
    ActivatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods=this.foodSerivce.getAllFoodsSearch(params.searchTerm);
      else if(params.tag)
      this.foods=this.foodSerivce.getAllFoodsByTag(params.tag);

      else

      this.foods=this.foodSerivce.getAll();
    });

  }

  ngOnInit(): void {
  }

}
