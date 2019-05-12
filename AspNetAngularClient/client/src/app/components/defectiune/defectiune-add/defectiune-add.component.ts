import {Component, OnInit} from '@angular/core';
import {DefectiuneService} from '../../../service/defectiune.service';
import {Location} from '@angular/common';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-defectiune-add',
  templateUrl: './defectiune-add.component.html',
  styleUrls: ['./defectiune-add.component.css']
})
export class DefectiuneAddComponent implements OnInit {

  constructor(private defectiuneService: DefectiuneService, private location: Location, private nav: NavbarService) {
  }

  ngOnInit() {
    this.nav.show();
  }


  goBack(): void {
    this.location.back();
  }

  add(nume, cost) {
    this.defectiuneService.addDefectiuni(nume, cost).then(() => {
      this.goBack()
    });
  }

}
