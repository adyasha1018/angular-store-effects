import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Router } from '@angular/router';
import { Store, select } from "@ngrx/store";
import { Subscription } from "rxjs";
import { List } from "../list.model";
import * as MyActions from "../my.actions";
import * as fromApp from "../app.reducer";
@Component({
  selector: "my-modal",
  templateUrl: "./my-modal.component.html",
  styleUrls: ["./my-modal.component.css"]
})
export class MyModalComponent implements OnInit {
  @Input('image') currentImageObj;
  @Input() categoryList;
  categoryName: string;
  categoryDesc: string;
  modalOpened: boolean = false;
  listPresent: boolean = false;
  addToList: boolean = false;
  editedItem: List;
  categories = [];
  subscription: Subscription;
  constructor(private store: Store<fromApp.AppState>,
    private router: Router) {}
  
  ngOnInit() {
    this.subscription = this.store
    .select("categoryList")
    .subscribe(stateData => {
      this.categories = stateData.list;
    });
  }
  openModal() {
    this.modalOpened = true;
    document.getElementById("myModal").style.display = "block";
  }
  onSubmit() {
    const categoryObject = new List(this.categoryName, this.categoryDesc, []);
    this.store.dispatch(new MyActions.ADD(categoryObject));
    this.clearData();
  }
  closeModal() {
    document.getElementById("myModal").style.display = "none";
    this.clearData();
  }
  addList() {
    this.addToList = !this.addToList;
    this.listPresent = true;
  }
  clearData() {
    this.categoryName = "";
    this.categoryDesc = "";
  }
  edit(categoryObj) {
    this.categoryName = categoryObj.name;
    this.categoryDesc = categoryObj.desc;
    this.editedItem = categoryObj;
  }
  update() {
    const newObj = new List(
      this.categoryName,
      this.categoryDesc,
      this.editedItem.images
    );
    const index = this.categories.indexOf(this.editedItem);
    this.store.dispatch(new MyActions.UPDATE(newObj, index));
    this.clearData();
    this.editedItem = null;
  }
  addImageToThisList(categoryObj) {
    this.edit(categoryObj);
    this.editedItem.images.push(this.currentImageObj.userImageURL);
    this.update();
    this.closeModal();
    this.router.navigate(['favourite']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
