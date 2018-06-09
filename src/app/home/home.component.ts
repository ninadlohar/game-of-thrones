import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data: any;
  allData: any[] = [];
  someProperty;

  constructor(public _apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.displayAllBooks();
    this.displayAllCharacters();
    this.displayAllHouses();
    // this.data = this.data.concat(this.displayAllBooks(), this.displayAllCharacters(), this.displayAllCharacters());
  }

  public displayAllCharacters = () => {
    this._apiService.getAllCharacters().subscribe(
      data => {
        this.allData = this.allData.concat(data);
      }, err => {
        console.log(err.errorMessage);
      });
  }

  public displayAllBooks = () => {
    this._apiService.getAllBooks().subscribe(
      data => {
        this.allData = this.allData.concat(data);
      }, err => {
        console.log(err.errorMessage);
      });
  }

  public displayAllHouses = () => {
    this._apiService.getAllHouses().subscribe(
      data => {
        this.allData = this.allData.concat(data);
      }, err => {
        console.log(err.errorMessage);
      });
  }
}
