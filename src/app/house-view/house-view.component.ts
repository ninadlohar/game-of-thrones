import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public id;
  public house;
  constructor(private _apiService: ApiService,
    public _route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getSingleHouseDetail(this.id);
  }

  public getSingleHouseDetail = (id) => {
    this._apiService.getSingleHouse(id).subscribe(
      data => {
        this.house = data;
        console.log(data);
      },
      error => {
        console.log('error found');
      });
  }

}
