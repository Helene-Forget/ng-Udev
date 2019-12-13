import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';
import {library} from '../library';

@Component({
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  library: Book[] = library;

  constructor() { }

  ngOnInit() {
  }

}
