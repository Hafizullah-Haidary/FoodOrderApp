import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { food } from '../shared/models/food';
import { tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():food[]{
    return sample_foods;
  }
  getAllFoodsSearch(searchTerm:string) :food[] {
    return this.getAll().filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }
  getFoodById(foodId:string):food{
    return this.getAll().find(food=>food.id==foodId) ?? new food();
  }
  getAllTags(): tag[] {
    return sample_tags;
  }
  getAllFoodsByTag(tag: string): food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

}
