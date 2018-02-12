import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-films-view',
  templateUrl: './films-view.component.html',
  styleUrls: ['./films-view.component.scss']
})
export class FilmsViewComponent implements OnInit {

  typeValue: string;

  typeList: Object[] = [
    {
      viewValue: 'Grid',
      value: 'grid'
    },
    {
      viewValue: 'List',
      value: 'list'
    }
  ];

  @Output()
  setListViewEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setListView() {
    this.setListViewEvent.emit(this.typeValue);
  }

}
