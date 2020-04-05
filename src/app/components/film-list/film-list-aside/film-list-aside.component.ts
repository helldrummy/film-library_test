import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-film-list-aside',
  templateUrl: './film-list-aside.component.html',
  styleUrls: ['./film-list-aside.component.scss']
})
export class FilmListAsideComponent implements OnInit {
  @Output() onFavouritesUpdate: EventEmitter<any> = new EventEmitter();
  favouritesList: any = [];
  userData: any;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.favouritesList = this.localStorageService.getFavourites();
    this.getUserData();
  }

  changeFilmStatus(film) {
    this.onFavouritesUpdate.emit(film);
  }

  getUserData() {
    this.userData = this.localStorageService.getUserData();
  }
}
