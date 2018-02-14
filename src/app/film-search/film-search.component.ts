import {
  Component,
  OnInit
} from '@angular/core';

import { FilmCardService } from '../film-card/film-card.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  filmName: string = 'Star Wars';

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.getFilms();
  }

  private getFilms() {
    if (!this.filmName) {
      return;
    }
    this.filmCardService.sendSearchText(this.filmName);
  }

}
