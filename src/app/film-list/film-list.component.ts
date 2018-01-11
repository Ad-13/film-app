import {
  Component,
  OnInit,
  Output
 } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  filmList: Object[] = [];

  constructor() { }

  ngOnInit() {
  }

  buildList(data) {
    this.filmList = data;
  }

}
