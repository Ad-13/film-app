import {
  Injectable,
  Output,
  EventEmitter
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmCardService {

  private newFilmObserver = new Subject<string>();
  private protocol: string = 'http://';
  private domain: string = 'www.omdbapi.com';
  private apikey: string = 'b080b47c';
  private params: any = {
    plot: 'full',
    filmName: '',
    page: 1
  };
  @Output() loadMoreEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: Http) { }

  onLoadMore() {
    this.loadMoreEvent.emit();
  }

  public emitNewFilmObserver(searchText: string = this.params.filmName): void {
    this.newFilmObserver.next(searchText);
  }

  public subscribeNewFilmObserver(): Observable<string> {
    return this.newFilmObserver.asObservable();
  }

  public sendSearchRequest(): Observable<string> {
    const url: string = this.biuldUrl();
    return this.http.get(url).map(this.extractData);
  }

  public loadFilms(filmName: string): Observable<string> {
    if (!filmName) { return; }
    this.setName(filmName);
    return this.sendSearchRequest();
  }

  public loadMore(): Observable<string> {
    this.nextPage();
    return this.sendSearchRequest();
  }

  private encodeQueryData(data): string {
    let res: any = [];
    Object.keys(data).forEach(function (key) {
      res.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    });
    res = res.join('&').replace('filmName', 's');
    return res;
  }

  private biuldUrl(): string {
    return this.protocol + this.domain + '/?' + `apikey=${this.apikey}&` + this.encodeQueryData(this.params);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.Search || [];
  }

  private prevPage(): void {
    this.params.page--;
  }

  private nextPage(): void {
    this.params.page++;
  }

  private resetPage(): void {
    this.params.page = 1;
  }

  private setName(filmName: string): void {
    this.params.filmName = filmName;
  }

}
