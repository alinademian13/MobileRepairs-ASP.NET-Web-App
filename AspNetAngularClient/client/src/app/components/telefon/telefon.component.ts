import {Component, OnInit} from '@angular/core';
import {TelefonService} from '../../service/telefon.service';
import {Telefon} from '../../shared/Models/telefon';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { TelefonDto } from '../../shared/DTOs/TelefonDto';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-telefon',
  templateUrl: './telefon.component.html',
  styleUrls: ['./telefon.component.sass']
})
export class TelefonComponent implements OnInit {
  telefonList: Array<Telefon>
  errorMessage: string
  telefonSelected: Telefon
  msg: String
  deleteMsg: any
  updateMsg: any
  telefonUpdate: TelefonDto
  blabla: string

  constructor(private service: TelefonService, private router: Router, private route: ActivatedRoute, private nav: NavbarService) {
  }

  ngOnInit(): void {
    this.nav.show();
    this.getTelefonList();
  }

  getTelefonList() {
    this.service.getTelefonList().subscribe(
      telefonList => this.telefonList = telefonList,
      error => this.errorMessage = error as any
    );

  }

  onSelect(telefon: Telefon) {
    this.telefonSelected = telefon;
    console.log(this.telefonSelected.IdTelefon, this.telefonSelected.Marca, this.telefonSelected.Brand);

  }


  addTelefon(Marca: string, Brand: string) {
    this.service.addTelefon(Marca, Brand).then(ras => {
      this.msg = ras;
      if (this.msg === 'adaugat') {

        this.router.navigate(['telefon']);
      } else {
        console.log(this.msg);
      }

    });
  }

  deleteTelefon() {
    this.service.deleteTelefon(this.telefonSelected.IdTelefon).then(rsp => {
        this.deleteMsg = rsp;
        console.log(this.deleteMsg);

      },
      error => this.errorMessage = error);

  }

  editTelefon(Marca: string, Brand: string) {
    this.telefonUpdate = {Marca, Brand} as TelefonDto;
    this.service.updateTelefon(this.telefonSelected.IdTelefon, this.telefonUpdate).then(rsp => {
        this.updateMsg = rsp;
        console.log(this.updateMsg);
      },
      error => this.errorMessage = error);
  }
}
