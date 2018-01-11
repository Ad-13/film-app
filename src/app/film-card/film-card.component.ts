import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { FilmCardService } from './film-card.service';


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input()
  film: object;

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
  }

}
