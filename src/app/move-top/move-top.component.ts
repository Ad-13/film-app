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
    let elem = document.querySelector('.sidenav-content');

    function tick() {
      if (elem.scrollTop === 0) {
        return;
      }
      elem.scrollTop = elem.scrollTop - 50;
      if (elem.scrollTop <= 0) {
        elem.scrollTop = 0;
      }
      setTimeout(() => {
        tick();
      }, 0);
    }
    tick();
  }

}
