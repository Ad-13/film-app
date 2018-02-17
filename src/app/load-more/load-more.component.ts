import {
  Component,
  OnInit,
  HostListener
} from '@angular/core';

import { FilmCardService } from '../film-card/film-card.service';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    this.filmCardService.onLoadMore();
  }

}
