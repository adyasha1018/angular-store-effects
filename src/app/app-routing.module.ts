import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavouritePageComponent} from './favourite-page/favourite-page.component';
import {SearchComponent} from './search/search.component';
const routes: Routes = [
  {
    path: 'search',
    component:  SearchComponent
  },

  {
    path: 'favourite',
    component: FavouritePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
