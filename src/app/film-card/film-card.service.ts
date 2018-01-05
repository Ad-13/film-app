import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmCardService {

  url: string = 'http://www.omdbapi.com/?apikey=b080b47c&plot=full&s=';

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    return body.Search || [];
  }

  getFilms(filmName: string) {
    return this.http.get(this.url + filmName).map(this.extractData);
  }

}
