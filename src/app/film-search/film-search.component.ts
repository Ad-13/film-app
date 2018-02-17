import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { FilmCardService } from '../film-card/film-card.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  @Input()
  filmName: string;

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
  }

  private getFilms() {
    if (!this.filmName) { return; }
    this.filmCardService.emitNewFilmObserver(this.filmName);
  }

}
