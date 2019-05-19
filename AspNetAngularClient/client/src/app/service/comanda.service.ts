import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ComandaDtoList} from '../shared/DTOs/ComandaDtoList';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  // base: string = 'http://localhost:60097/api/Comanda/';

  constructor(private http: HttpClient, private router: Router) {
  }


  getComenzi(): Promise<ComandaDtoList[]> {
    return this.http.get<ComandaDtoList[]>(environment.apiurl + '/Comanda/GetComandaList').toPromise();
  }
}
