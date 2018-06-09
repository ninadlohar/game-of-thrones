import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http: HttpClient) { }
  public charApi = 'https://www.anapioficeandfire.com/api/characters';
  public bookApi = 'https://www.anapioficeandfire.com/api/books';
  public houseApi = 'https://www.anapioficeandfire.com/api/houses';


  public getAllCharacters = (): any => {
    const myResponse = this._http.get(this.charApi);

    return myResponse;
  }

  public getAllBooks = (): any => {
    const myResponse2 = this._http.get(this.bookApi);
    return myResponse2;
  }

  public getAllHouses = (): any => {
    const myResponse = this._http.get(this.houseApi);
    return myResponse;
  }

  public getSingleCharacter = (id): any => {
    const myResponse = this._http.get(this.charApi + '/' + id);
    return myResponse;
  }

  public getSingleBook = (id): any => {
    const myResponse = this._http.get(this.bookApi + '/' + id);
    return myResponse;
  }

  public getSingleHouse = (id): any => {
    const myResponse = this._http.get(this.houseApi + '/' + id);
    return myResponse;
  }
}

