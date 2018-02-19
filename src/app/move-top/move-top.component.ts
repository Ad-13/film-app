import {
  Component,
  OnInit,
  HostListener
} from '@angular/core';

import { FilmCardService } from '../film-card/film-card.service';

@Component({
  selector: 'app-move-top',
  templateUrl: './move-top.component.html',
  styleUrls: ['./move-top.component.scss']
})
export class MoveTopComponent implements OnInit {

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    document.querySelector('.sidenav-content').scrollTop = 0;
  }

}
