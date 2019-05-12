import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import { Telefon } from './../shared/Models/telefon';
import { TelefonDto } from './../shared/DTOs/TelefonDto';


@Injectable({
  providedIn: 'root'
})
export class TelefonService {

  constructor(private http: HttpClient) {
  }


  getTelefonList(): Observable<Telefon[]> {
    return this.http.get<Telefon[]>(environment.apiurl + '/Telefon/GetTelefoane');
  }


  addTelefon(Marca: string, Brand: string) {
    const telefon = {Marca, Brand} as TelefonDto;

    return this.http.post<String>(environment.apiurl + '/telefon/AddTelefon', telefon).toPromise();
  }

  deleteTelefon(id: number) {
    return this.http.delete(environment.apiurl + '/telefon/DeleteTelefon/' + id).toPromise();
  }

  updateTelefon(id: number, telefon: TelefonDto) {
    return this.http.put(environment.apiurl + '/telefon/UpdateTelefon/' + id, telefon).toPromise();
  }
}
