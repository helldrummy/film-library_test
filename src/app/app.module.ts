import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilmListComponent} from './components/film-list/film-list/film-list.component';
import {FilmItemComponent} from './components/film-list/film-item/film-item.component';
import {FilmListAsideComponent} from './components/film-list/film-list-aside/film-list-aside.component';
import {ListModalComponent} from './components/modals/list-modal/list-modal.component';
import {LOCAL_STORAGE, StorageServiceModule} from 'ngx-webstorage-service';
import {LocalStorageService} from './services/local-storage.service';
import {LoginModalComponent} from './components/modals/login-modal/login-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmListAsideComponent,
    ListModalComponent,
    LoginModalComponent
  ],
  imports: [NgbModule, BrowserModule, AppRoutingModule, HttpClientModule, StorageServiceModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ListModalComponent],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
