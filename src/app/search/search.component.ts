import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { List } from "../list.model";
import { DataService } from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = "";
  images = [];
  categoryList: List[];
  private subscription: Subscription;
  constructor(private imagesService: DataService)  {}

  ngOnInit() {
    this.categoryList = this.imagesService.getList();
    this.subscription = this.imagesService.listChanged.subscribe(
      (categoryList: List[]) => {
        this.categoryList = categoryList;
      }
    );
  }

  onSubmit() {
    this.images = [];
    this.imagesService.search(this.searchTerm).subscribe((result: any) => {
      let index= Math.floor(Math.random() * result.hits.length)
      this.images.push(result.hits[index]);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
