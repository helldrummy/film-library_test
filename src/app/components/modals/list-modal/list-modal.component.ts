import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  @Input() public filmData;

  constructor(public activeModal: NgbActiveModal, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  changeFilmStatus(film) {
    film.isFavourite = !film.isFavourite;
    this.localStorageService.storeOnLocalStorage(film);
  }
}
