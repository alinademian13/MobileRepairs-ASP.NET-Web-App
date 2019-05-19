import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientDTO} from '../../../shared/DTOs/ClientDTO';
import {ClientService} from '../../../service/client.service';
import {ApiService} from '../../../service/api.service';
import {EmployeeId} from '../../../shared/Models/employeeId';
import {Telefon} from '../../../shared/Models/telefon';
import {TelefonService} from '../../../service/telefon.service';

import {NavbarService} from '../../../service/navbar.service';
import {NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {ComandaDtoList} from '../../../shared/DTOs/ComandaDtoList';
import {Location} from '@angular/common';
import {Defectiune} from '../../../shared/DTOs/defectiune';
import {DefectiuneService} from '../../../service/defectiune.service';
import {Observable} from 'rxjs';
import {DefectiuneMultiSelect} from "../../../shared/DTOs/DefectiuneMultiSelect";
import {DefectiuneId} from "../../../shared/Models/defectiuneId";
import {ListItem} from "ng-multiselect-dropdown/multiselect.model";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  comandaSelected: ComandaDtoList = new ComandaDtoList();
  comandaList: Array<ComandaDtoList>
  employeeList: Array<EmployeeId>
  client: ClientDTO = new ClientDTO();
  editing: boolean = false;
  comanda: boolean = false;
  arataDataInchidere: boolean = false;
  id: number;
  errorMessage: any;
  employeeSelected: EmployeeId = new EmployeeId();
  telefonList: Array<Telefon>
  telefonSelected: Telefon = new Telefon();
  selectedDateDeschidere: NgbDate;
  selectedDateInchidere: NgbDate;
  idUnicTelefon: number;
  alt: Array<any>;
  defectiuneList: Array<DefectiuneId>;

  dropdownList: [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private clientService: ClientService,
              private router: Router,
              private route: ActivatedRoute,
              private apiService: ApiService,
              private telefonService: TelefonService,
              private nav: NavbarService,
              private ngbDateParserFormatter: NgbDateParserFormatter,
              private location: Location,
              private defectiuneService: DefectiuneService
  ) {

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
    this.getDefectiuniList();


    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getDefectiuniList() {
    this.defectiuneService.getDefectiuni().then(rsp => {
      this.defectiuneList = rsp;
      this.dropdownList = this.defectiuneList.map(d => ({id: d.Id, text: d.Nume})
      );
      console.log(this.dropdownList);


    }, err => {
      console.log(' error', err);
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }


  goBack(): void {
    this.location.back();
  }

  addButton() {

    this.comanda = true;
  }

  getTelefonList() {
    this.telefonService.getTelefonList().subscribe(
      telefonList => this.telefonList = telefonList,
      error1 => this.errorMessage = error1 as any
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
      error1 => this.errorMessage = error1 as any
    );

  }

  editClient() {
    this.editing = true;
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

  // save(): void {
  // this.clientService.update(this.client)
  //   .subscribe(_ => this.goBack());
  // }

  onSelect(employee: EmployeeId) {
    this.employeeSelected = employee;
  }

  onSelectTelefon(telefon: Telefon) {
    this.telefonSelected = telefon;
  }

  checkebox() {
    this.arataDataInchidere = true;
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
    this.apiService.addComanda(
      this.client.ID_Client, this.employeeSelected.idEmployee, this.telefonSelected.IdTelefon, this.idUnicTelefon,
      true, this.selectedItems, selectedDateD, selectedDateI)
      .subscribe(() => {
        this.router.navigate(['/comanda']);
      }, err => {
        console.log('error', err);
      });
  }

  // addComanda(idClient: number, idEmployee: number, Telefon1: Telefon,
  //           idUnicTelefon: string, stare: boolean, DataDeschidere: Date, DataInchidere: Date) {

  //  this.apiService.addComanda(idClient, idEmployee, Telefon1.IdTelefon,
  //    Number(idUnicTelefon), stare, DataDeschidere, DataInchidere).subscribe(rsp => {
  //    if (rsp === 'added') {
  //      console.log('succes');
  //    }
  //  });

  // }

  onSelectComanda(comanda: ComandaDtoList) {
    this.comandaSelected = comanda;
  }
}
