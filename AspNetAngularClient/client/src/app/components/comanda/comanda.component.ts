import {Component, OnInit} from '@angular/core';
import {ComandaDtoList} from '../../shared/DTOs/ComandaDtoList';
import {ComandaService} from '../../service/comanda.service';
import {Router} from '@angular/router';
import {NavbarService} from '../../service/navbar.service';


@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  comenzi: Array<ComandaDtoList>;
  errorMessage: any;

  constructor(private comandaService: ComandaService, private router: Router, private nav: NavbarService) {
  }

  ngOnInit() {
    this.nav.show();
    this.getComenzi();
  }

  getComenzi() {
    this.comandaService.getComenzi().then(
      comandaList => this.comenzi = comandaList,

      error1 => this.errorMessage = error1 as any
    );
  }

}
