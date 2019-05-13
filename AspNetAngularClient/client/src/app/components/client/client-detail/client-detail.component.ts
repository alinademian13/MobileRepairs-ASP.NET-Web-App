import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientDTO} from '../../../shared/DTOs/ClientDTO';
import {ClientService} from '../../../service/client.service';
import {ApiService} from '../../../service/api.service';
import {EmployeeId} from '../../../shared/Models/employeeId';
import {TelefonDto} from '../../../shared/DTOs/TelefonDto';
import {Telefon} from '../../../shared/Models/telefon';
import {TelefonService} from '../../../service/telefon.service';
import {error} from '@angular/compiler/src/util';
import {ComandaDto} from '../../../shared/DTOs/ComandaDto';
import {NavbarService} from '../../../service/navbar.service';
import {NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {ComandaDtoList} from "../../../shared/DTOs/ComandaDtoList";


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  comandaSelected: ComandaDto = new ComandaDto();
  comandaList: Array<ComandaDtoList>
  employeeList: Array<EmployeeId>
  client: ClientDTO = new ClientDTO();
  editing: boolean = false;
  comanda: boolean = false;
  stare: boolean = false;
  id: number;
  errorMessage: any;
  employeeSelected: EmployeeId = new EmployeeId();
  telefonList: Array<Telefon>
  telefonSelected: Telefon = new Telefon();
  selectedDateDeschidere: NgbDate;
  selectedDateInchidere: NgbDate;
  idUnicTelefon: number;

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute, private apiService: ApiService, private telefonService: TelefonService, private nav: NavbarService, private ngbDateParserFormatter: NgbDateParserFormatter) {

    this.route.queryParams.subscribe(params => {

      this.client.ID_Client = params['ID_Client'];
      this.client.Nume = params['Nume'];
      this.client.Email = params['Email'];
      this.client.Adresa = params['Adresa'];
      // this.client = params['client'];
    });
  }

  ngOnInit() {
    this.nav.show();
    this.getEmployeeList();
    this.getTelefonList();
    this.getComandaList(this.client.ID_Client);
  }

  getTelefonList() {
    this.telefonService.getTelefonList().subscribe(
      telefonList => this.telefonList = telefonList,
      error => this.errorMessage = error as any
    );

  }

  getComandaList(id: number) {
    this.apiService.getComandaById(id).then(
      comandaList => this.comandaList = comandaList,

      error1 => this.errorMessage = error1 as any
    );

  }

  getEmployeeList() {
    this.apiService.getEmployees().subscribe(
      employeeList => this.employeeList = employeeList,
      error => this.errorMessage = error as any
    );

  }

  editClient() {
    this.editing = true;


  }

  saveClient(id: number, nume: string, email: string, adresa: string) {

    this.clientService.updateClient(id, nume, email, adresa).then(rsp => {
        if (rsp === 'updated') {
          // this.router.navigate(["/client"]);
          this.client.Email = email;
          this.client.Nume = nume;
          this.client.Adresa = adresa;
          // tslint:disable-next-line:no-unused-expression
          this.router.onSameUrlNavigation;
          // window.location.reload();
          this.editing = false;
        }
      }, err => {
        console.log('error', err);
      }
    );
  }

  deleteClient(id: number) {

    this.clientService.deleteClient(id).then(rsp => {
        if (rsp === 'deleted') {
          this.router.navigate(['/client']);
          // window.location.reload();
        }
      }, err => {
        console.log('error', err);
      }
    );
  }

  // goBack(): void {
  // this.location.back();
  // }

  // save(): void {
  //  this.clientService.update(this.client)
  //    .subscribe(_ => this.goBack());
  // }
  addButton() {
    this.comanda = true;
  }

  onSelect(employee: EmployeeId) {
    this.employeeSelected = employee;
  }

  onSelectTelefon(telefon: Telefon) {
    this.telefonSelected = telefon;
  }

  checkebox() {
    this.stare = true;
  }

  onSelectDateDeschidere($event: NgbDate) {
    console.log($event);
    this.selectedDateDeschidere = $event;
  }

  onSelectDateInchidere($event: NgbDate) {
    this.selectedDateInchidere = $event;
  }

  submit() {

    console.log(this.ngbDateParserFormatter.format(this.selectedDateDeschidere));
    const selectedDateD = this.ngbDateParserFormatter.format(this.selectedDateDeschidere)
    const selectedDateI = this.ngbDateParserFormatter.format(this.selectedDateInchidere)
    this.apiService.addComanda(this.client.ID_Client, this.employeeSelected.idEmployee, this.telefonSelected.IdTelefon, this.idUnicTelefon, true, selectedDateD, selectedDateI).then(r => {

    }, err => {

    })
  }

  addComanda(idClient: number, idEmployee: number, Telefon1: Telefon,
             idUnicTelefon: string, stare: boolean, DataDeschidere: Date, DataInchidere: Date) {

    this.apiService.addComanda(idClient, idEmployee, Telefon1.IdTelefon,
      Number(idUnicTelefon), stare, DataDeschidere, DataInchidere).then(rsp => {
      if (rsp === 'added') {
        console.log('succes');
      }
    });

  }

  onSelectComanda(comanda: ComandaDto) {
    this.comandaSelected = comanda;
  }
}
