import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ListModalComponent} from '../../modals/list-modal/list-modal.component';
import {ApiService} from 'src/app/services/api.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {ChangeDetection} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  filmData: any = [];
  favouritesList: any = [];
  isGridView: boolean = true;

  constructor(private modalService: NgbModal, private apiService: ApiService, private localStorageService: LocalStorageService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this.localStorageService.getUserData() < 1) {
      this.onOpenLoginModal();
    }

    this.favouritesList = this.localStorageService.getFavourites();
    this.getFilmData();
    this.cdr.detectChanges();
  }

  getFilmData() {
    this.apiService.getData().then(val => {
      this.filmData = val.map(film => {
        film.isFavourite = this.favouritesList.findIndex(el => el.id === film.id) !== -1;
        return film;
      });
    });
  }

  updateFavouritesList(film) {
    this.filmData.map(el => {
      if (el.id === film.id) {
        el.isFavourite = !el.isFavourite;
        return el;
      }
    });
    this.localStorageService.storeOnLocalStorage(film);
  }

  openFilmModal(data) {
    const modalRef = this.modalService.open(ListModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.filmData = data;
  }

  onOpenLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent, {
      centered: true,
      size: 'sm'
    });
  }
}
