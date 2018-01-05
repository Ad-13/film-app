import { Component, OnInit } from '@angular/core';
import { FilmCardService } from './film-card.service';


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  filmList: Object[] = [];
  filmName: string;

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.filmName = 'Star Wars';
    this.getFilms();
  }

  private getFilms() {
    if (!this.filmName) {
      return;
    }
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      console.log(data);
    });
  }

}
