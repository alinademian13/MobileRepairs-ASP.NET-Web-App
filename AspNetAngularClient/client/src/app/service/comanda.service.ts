import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ComandaDtoList} from '../shared/DTOs/ComandaDtoList';
import {environment} from 'src/environments/environment';
import {Defectiune} from "../shared/DTOs/defectiune";

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  // base: string = 'http://localhost:60097/api/Comanda/';

  constructor(private http: HttpClient, private router: Router) {
  }


  getComenzi() {
    return this.http.get<ComandaDtoList[]>(environment.apiurl + '/Comanda/GetComandaList').toPromise();
  }

  updateComanda(id: number, Stare: boolean, DateInchidere: any) {
    const defectiune = {Nume: 'nume', Cost: 32} as Defectiune
    return this.http.put(environment.apiurl + '/Comanda/UpdateComanda?id=' + id + '&stare=' +
      Stare + '&DataInchidere=' + DateInchidere, defectiune
    ).toPromise();
  }
}
