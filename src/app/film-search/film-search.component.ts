import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { FilmCardService } from '../film-card/film-card.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  filmList: Object[] = [];
  filmName: string = 'Star Wars';

  @Output()
  getFilmsEvent: EventEmitter<Object[]> = new EventEmitter();

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.getFilms();
  }

  private getFilms() {
    if (!this.filmName) {
      return;
    }
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.getFilmsEvent.emit(this.filmList);
      console.log(data);
    });
  }

}
