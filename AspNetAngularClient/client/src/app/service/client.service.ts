import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { ClientListDTO } from "./../shared/DTOs/clientListDTO";
import { ClientDTO } from "./../shared/DTOs/ClientDTO";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  base: string = 'http://localhost:60097/api/client/';

  constructor(private http: HttpClient, private router: Router) {
  }

  getClients(filter: string, skip: number, take: number) {
    return this.http.get<ClientListDTO>(this.base + 'getClients?filter=' + filter + '&skip=' + skip + '&take=' + take).toPromise();
  }

  getClient(id: number) {

    return this.http.get<ClientDTO>(this.base + 'getClient?id=' + id).toPromise();

    //  .map(clients => clients.find(client => client.ID_Client === id));
  }

  addClient(nume: string, email: string, adresa: string) {
    //   let client={ Nume:nume,Email:email,Adresa:adresa } as Client;
    const clientdto = {Nume: nume, Email: email, Adresa: adresa} as ClientDTO;
    return this.http.post(this.base + 'AddClient', clientdto).toPromise();

  }

  updateClient(id: number, nume: string, email: string, adresa: string) {

    const clientdto = {Nume: nume, Email: email, Adresa: adresa} as ClientDTO;

    // const url = `${this.base}/${id}`;
    return this.http.put(this.base + 'EditClient/' + id, clientdto).toPromise();
  }

  deleteClient(id: number) {

    return this.http.delete(this.base + 'DeleteClient/' + id).toPromise();
  }
}
