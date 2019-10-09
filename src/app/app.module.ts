import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DataService } from './data.service';

import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from './app.effects';

import { MyModalComponent } from './my-modal/my-modal.component';
import * as fromApp from './app.reducer';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    FavouritePageComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }