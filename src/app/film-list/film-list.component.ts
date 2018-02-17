import {
  Component,
  OnInit,
  Output
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
  public filmList: Object[] = [];
  public viewType: string;
  @Output() public filmName: string = 'Star Wars';

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.subscription = this.filmCardService.subscribeNewFilmObserver().subscribe((filmName: string) => {
      this.getFilms(filmName);
      console.log('FilmListComponent getFilms');
    });
    this.filmCardService.loadMoreEvent.subscribe(() => {
      this.addFilms();
      console.log('FilmListComponent addFilms');
    });
    this.getFilms(this.filmName);
  }

  private buildList(data): void {
    this.filmList = data;
  }

  private extendList(data): void {
    this.filmList = this.filmList.concat(data);
  }

  private setListView(viewType): void {
    this.viewType = viewType;
  }

  private getFilms(filmName): void {
    if (!filmName) { return; }
    this.filmCardService.loadFilms(filmName).subscribe(data => {
      this.buildList(data);
    });
  }

  private addFilms(): void {
    this.filmCardService.loadMore().subscribe(data => {
      this.extendList(data);
    });
  }

}
