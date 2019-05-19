//import { Component, OnInit } from '@angular/core';
//import { ComandaService } from '../../../service/comanda.service';
//import { Router, ActivatedRoute } from '@angular/router';
//import { NavbarService } from '../../../service/navbar.service';
//import { EmployeeId } from '../../../shared/Models/employeeId';
//import { ClientDTO } from '../../../shared/DTOs/ClientDTO';
//import { Telefon } from '../../../shared/Models/telefon';
//import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
//import { Location } from '@angular/common';
//import { ClientService } from '../../../service/client.service';
//import { ApiService } from '../../../service/api.service';
//import { TelefonService } from '../../../service/telefon.service';


//@Component({
//  selector: 'app-comanda',
//  templateUrl: './comanda-add.component.html',
//  styleUrls: ['./comanda-add.component.css']
//})
//export class ComandaAddComponent implements OnInit {
//  comanda: boolean = false;
//  employeeList: Array<EmployeeId>
//  client: ClientDTO = new ClientDTO();
//  stare: boolean = false;
//  id: number;
//  errorMessage: any;
//  employeeSelected: EmployeeId = new EmployeeId();
//  telefonList: Array<Telefon>
//  telefonSelected: Telefon = new Telefon();
//  selectedDateDeschidere: NgbDate;
//  selectedDateInchidere: NgbDate;
//  idUnicTelefon: number;


//  constructor(private comandaService: ComandaService,
//              private router: Router,
//              private nav: NavbarService,
//              private clientService: ClientService,
//              private route: ActivatedRoute,
//              private apiService: ApiService,
//              private telefonService: TelefonService,
//              private ngbDateParserFormatter: NgbDateParserFormatter,
//              private location: Location)
//  {
//    this.route.queryParams.subscribe(params => {

//      this.client.ID_Client = params['ID_Client'];
//      this.client.Nume = params['Nume'];
//      this.client.Email = params['Email'];
//      this.client.Adresa = params['Adresa'];
//      // this.client = params['client'];
//    });
//  }

//  ngOnInit() {
//    this.nav.show();
//    this.getEmployeeList();
//    this.getTelefonList();
//  }

//  goBack(): void {
//    this.location.back();
//  }

//  addButton() {
//    this.comanda = true;
//  }

//  getTelefonList() {
//    this.telefonService.getTelefonList().subscribe(
//      telefonList => this.telefonList = telefonList,
//      error => this.errorMessage = error as any
//    );

//  }

//  getEmployeeList() {
//    this.apiService.getEmployees().subscribe(
//      employeeList => this.employeeList = employeeList,
//      error => this.errorMessage = error as any
//    );

//  }

//  onSelect(employee: EmployeeId) {
//    this.employeeSelected = employee;
//  }

//  onSelectTelefon(telefon: Telefon) {
//    this.telefonSelected = telefon;
//  }

//  checkebox() {
//    this.stare = true;
//  }

//  onSelectDateDeschidere($event: NgbDate) {
//    console.log($event);
//    this.selectedDateDeschidere = $event;
//  }

//  onSelectDateInchidere($event: NgbDate) {
//    this.selectedDateInchidere = $event;
//  }

//  submit() {

//    console.log(this.ngbDateParserFormatter.format(this.selectedDateDeschidere));
//    const selectedDateD = this.ngbDateParserFormatter.format(this.selectedDateDeschidere)
//    const selectedDateI = this.ngbDateParserFormatter.format(this.selectedDateInchidere)
//    this.apiService.addComanda(
//      this.client.ID_Client, this.employeeSelected.idEmployee, this.telefonSelected.IdTelefon, this.idUnicTelefon, true, selectedDateD, selectedDateI)
//      .subscribe(() => {
//        this.router.navigate(['/comanda']);
//      }, err => {
//        console.log('error', err);
//      });
//  }

//}
