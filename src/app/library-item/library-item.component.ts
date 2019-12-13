import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent implements OnInit {
  @Input()
  book: Book;
  constructor() { }

  ngOnInit() {
  }

}
