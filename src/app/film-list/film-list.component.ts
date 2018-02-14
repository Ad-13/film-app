import {
  Component,
  OnInit
 } from '@angular/core';

import { FilmCardService } from '../film-card/film-card.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})

export class FilmListComponent implements OnInit {
  private subscription: Subscription;

  filmList: Object[] = [];

  viewType: string;

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.subscription = this.filmCardService.getSearchText().subscribe((filmName: string) => {
      this.getFilms(filmName);
    });
  }

  buildList(data) {
    this.filmList = data;
  }

  setListView(viewType) {
    this.viewType = viewType;
  }

  private getFilms(filmName) {
    if (!filmName) {
      return;
    }
    this.filmCardService.getFilms(filmName).subscribe(data => {
      this.buildList(data);
    });
  }

}
