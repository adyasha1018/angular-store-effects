import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as fromApp from "../app.reducer";
import { List } from "../list.model";

@Component({
  selector: "favourite-page",
  templateUrl: "./favourite-page.component.html",
  styleUrls: ["./favourite-page.component.css"]
})
export class FavouritePageComponent implements OnInit {
  subscription: Subscription;
  categories: Array<List>;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select("categoryList")
      .subscribe(stateData => {
        this.categories = stateData.list;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**Below code can be used as alternative for download */

  // Add getImage function in dataService

  //   constructor(
  //     private http: HttpClient,
  //   ) { }
  // getImage(imageUrl: string) {
  //   return this.http.get(imageUrl, {observe: 'response', responseType: 'blob'})
  //     .map((res) => {
  //       return new Blob([res.body], {type: res.headers.get('Content-Type')});
  //     })
  // }

  // this.dataService.getImage(downloadLink).subscribe(
  //   (res) => {
  //         const a = document.createElement('a');
  //         a.href = URL.createObjectURL(res);
  //         a.download = title;
  //         document.body.appendChild(a);
  //         a.click();
  //   });
  // }
}
