import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { tag } from 'src/app/shared/models/tag';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class tagsComponent implements OnInit {
  tags?:tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTags();
   }


  ngOnInit(): void {
  }

}
