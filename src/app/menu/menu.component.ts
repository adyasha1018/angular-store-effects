import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from "@ngrx/store";
@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  allImages = this.store.select(state => state);
  constructor(private store: Store<{ allImages: any }>) { }

  ngOnInit() {
    this.store.dispatch({ type: '[Images Page] Load Images' })
  }

}
