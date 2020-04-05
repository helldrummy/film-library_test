import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  STORAGE_KEY = 'film-favourites';
  USER_DATA_STORAGE_KEY = 'user-storage';

  currentFavouritesList = this.storage.get(this.STORAGE_KEY) || [];
  currentUserList = this.storage.get(this.USER_DATA_STORAGE_KEY) || [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  removeFromFavourites(id) {
    this.currentFavouritesList.splice(this.currentFavouritesList.findIndex(el => el.id === id), 1);
    this.storage.set(this.STORAGE_KEY, this.currentFavouritesList);
  }

  public getFavourites() {
    return this.currentFavouritesList;
  }

  public getUserData() {
    return this.currentUserList;
  }

  public storeOnLocalStorage(film: any): void {
    this.currentFavouritesList.findIndex(el => el.id === film.id) === -1 ? this.currentFavouritesList.push(film) : this.removeFromFavourites(film.id);
    this.storage.set(this.STORAGE_KEY, this.currentFavouritesList);
  }

  public addUserInfo(userName, userEmail) {
    this.currentUserList.findIndex(el => el.name === userName) === -1 ? this.currentUserList.push({
      name: userName,
      email: userEmail
    }) : console.log('This user is already exist in data base, have a good day');

    this.storage.set(this.USER_DATA_STORAGE_KEY, this.currentUserList);
  }

  public checkUserInfo(userName) {
    return this.currentUserList.findIndex(el => el.name === userName) === 0;
  }
}

