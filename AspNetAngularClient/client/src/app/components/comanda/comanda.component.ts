import { Component, OnInit } from '@angular/core';
import { ComandaDtoList } from '../../shared/DTOs/ComandaDtoList';
import { ComandaService } from '../../service/comanda.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../service/navbar.service';
import { ComandaDto } from '../../shared/DTOs/ComandaDto';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  comenzi: ComandaDto[] = [];

  constructor(private comandaService: ComandaService, private router: Router, private nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.getComenzi();
  }

  getComenzi() {
    this.comandaService.getComenzi().then(rsp => {
      this.comenzi = rsp.ComandaList;
    }, err => {
      console.log('error', err);
    });
  }

}
