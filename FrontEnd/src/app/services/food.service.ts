import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';
import { food } from '../shared/models/food';
import { tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAll():Observable<food[]>{
    return this.http.get<food[]>(FOODS_URL);
  }
  getAllFoodsSearch(searchTerm:string) :Observable<food[]>{
    return this.http.get<food[]>(FOODS_BY_SEARCH_URL + searchTerm);

  }
  getFoodById(foodId:string):Observable<food>{
    return this.http.get<food>(FOODS_BY_ID_URL + foodId)
  }
  getAllTags(): Observable<tag[]> {
    return this.http.get<tag[]>(FOODS_TAGS_URL);
  }
  getAllFoodsByTag(tag: string):Observable <food[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<food[]>(FOODS_BY_TAG_URL + tag)
  }

}
