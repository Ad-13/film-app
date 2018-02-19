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
  public isDataLoaded: boolean = false;
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

  private clearList(): void {
    this.filmList = [];
  }

  private extendList(data): void {
    this.filmList = this.filmList.concat(data);
  }

  private setListView(viewType): void {
    this.viewType = viewType;
  }

  private getFilms(filmName): void {
    if (!filmName) { return; }
    this.clearList();
    this.isDataLoaded = false;
    this.filmCardService.loadFilms(filmName).subscribe(
      data => {
        this.buildList(data);
      },
      error => {
        console.log(error);
      },
      () => {
        this.isDataLoaded = true;
      }
    );
  }

  private addFilms(): void {
    this.isDataLoaded = false;
    this.filmCardService.loadMore().subscribe(
      data => {
        this.extendList(data);
      },
      error => {
        console.log(error);
      },
      () => {
        this.isDataLoaded = true;
      }
    );
  }

}
