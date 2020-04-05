import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  environment = environment;

  constructor(private httpClient: HttpClient) {
  }

  getData(): Promise<any> {
    return this.httpClient.get(this.environment.apiUrl).toPromise();
  }
}
