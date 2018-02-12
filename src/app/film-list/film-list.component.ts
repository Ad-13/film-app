import {
  Component,
  OnInit
 } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})

export class FilmListComponent implements OnInit {

  filmList: Object[] = [];

  viewType: string;

  constructor() { }

  ngOnInit() {
  }

  buildList(data) {
    this.filmList = data;
  }

  setListView(viewType) {
    this.viewType = viewType;
  }

}
