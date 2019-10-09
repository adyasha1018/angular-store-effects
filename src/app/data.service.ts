import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

import { List } from "./list.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + "&q=";

  listChanged = new Subject<List[]>();
  private categoryList: List[] = [new List("", "", [""])];

  constructor(private http: HttpClient) {}
  loadAllImages() {
    return this.http.get(this.URL);
  }
  search(searchTerm) {
    return this.http.get(this.URL + searchTerm);
  }
  getList() {
    return this.categoryList.slice();
  }
  createList(listObj: List) {
    this.categoryList.push(listObj);
    this.listChanged.next(this.categoryList.slice());
  }
  updateList(index: number, newListObj: List) {
    this.categoryList[index] = newListObj;
    this.listChanged.next(this.categoryList.slice());
  }
}
