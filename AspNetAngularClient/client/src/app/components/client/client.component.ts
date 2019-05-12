import {Component, OnInit} from '@angular/core';
import { ClientDTO } from '../../shared/DTOs/ClientDTO';
import {NavigationExtras, Router} from '@angular/router';
import {ClientService} from '../../service/client.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'client-cmp',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: ClientDTO[] = [];
  count: number;
  filter: string = '';
  page: number = 0;
  take: number = 10;

  selectedClient: ClientDTO;

  constructor(private clientService: ClientService, private router: Router, private nav: NavbarService) {
  }

  ngOnInit() {
    this.nav.show();
    this.getClients();
  }

  getClients() {
    this.clientService.getClients(this.filter, this.page * this.take, this.take).then(rsp => {
      this.clients = rsp.ClientList;
      this.count = rsp.Count;
    }, err => {
      console.log('error', err);
    });
  }

  search() {
    this.getClients();
  }

  prevPage() {
    this.page--;
    this.getClients();
  }

  nextPage() {
    this.page++;
    this.getClients();
  }


  addClient() {
    this.router.navigate(['/client-add']);
  }

  gotoDetail(client: ClientDTO): void {

    this.selectedClient = client;
    this.navigate();
  }

  navigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        ID_Client: this.selectedClient.ID_Client,
        Nume: this.selectedClient.Nume,
        Email: this.selectedClient.Email,
        Adresa: this.selectedClient.Adresa,
        client: this.selectedClient
      }
    }

    //  this.router.navigateByUrl('client-detail/' + this.selectedClient.ID_Client)
    this.router.navigate(['/client-detail/' + this.selectedClient.ID_Client], navigationExtras);
  }

}
