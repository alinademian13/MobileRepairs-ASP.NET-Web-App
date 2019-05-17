import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ComandaDtoList } from '../shared/DTOs/ComandaDtoList';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  base: string = 'http://localhost:60097/api/Comanda/';

  constructor(private http: HttpClient, private router: Router) {
  }

  getComenzi() {
    return this.http.get<ComandaDtoList>(this.base + 'GetComandaList').toPromise();
  }
}
