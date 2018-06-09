import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { FilterPipe } from './filter.pipe';
import { SelectPipe } from './select.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterViewComponent,
    BookViewComponent,
    HouseViewComponent,
    SelectPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'book-view/:id', component: BookViewComponent },
      { path: 'house-view/:id', component: HouseViewComponent },
      { path: 'character-view/:id', component: CharacterViewComponent }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
