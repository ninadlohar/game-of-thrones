import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})

export class CharacterViewComponent implements OnInit {
  public id;
  public character;
  constructor(private _apiService: ApiService,
    public _route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getSingleCharacterDetail(this.id);
  }

  public getSingleCharacterDetail = (id) => {
    this._apiService.getSingleCharacter(id).subscribe(
      data => {
        this.character = data;
        console.log(data);
      },
      error => {
        console.log('error found');
      });
  }


}
