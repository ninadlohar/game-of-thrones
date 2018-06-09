import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public id;
  public book;
  constructor(public _apiService: ApiService,
    public _route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getSingleBookDetail(this.id);
  }

  public getSingleBookDetail = (id) => {
    this._apiService.getSingleBook(id).subscribe(
      data => {
        this.book = data;
        console.log(data);
      },
      error => {
        console.log('error found');
      });
  }

}
