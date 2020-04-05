import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() data: any;
  @Input() isGridView: boolean;
  @Output() isModalOpened: EventEmitter<any> = new EventEmitter();
  @Output() onFavouritesUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  changeFilmStatus(film) {
    this.onFavouritesUpdate.emit(film);
  }

  openModal() {
    this.isModalOpened.emit();
  }
}
