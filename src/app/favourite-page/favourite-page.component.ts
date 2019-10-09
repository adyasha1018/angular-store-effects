import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from "@ngrx/store";
import * as fromApp from "../app.reducer";
import { List } from "../list.model";

@Component({
  selector: 'favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.css']
})
export class FavouritePageComponent implements OnInit {
  subscription: Subscription;
  categories: Array<List>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store
      .select("categoryList")
      .subscribe(stateData => {
        this.categories = stateData.list;
        //console.log(this.categories.shift());
        //return this.categories.shift();
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
