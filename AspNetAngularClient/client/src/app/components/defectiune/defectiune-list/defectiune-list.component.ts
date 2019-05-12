import {Component, OnInit} from '@angular/core';
import {DefectiuneId} from '../../../shared/Models/defectiuneId';
import { Defectiune } from '../../../shared/DTOs/defectiune';
import {Router} from '@angular/router';
import {DefectiuneService} from '../../../service/defectiune.service';
import {Location} from '@angular/common';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-defectiune-list',
  templateUrl: './defectiune-list.component.html',
  styleUrls: ['./defectiune-list.component.css']
})
export class DefectiuneListComponent implements OnInit {
  defectiuni: Defectiune[] = [];
  selectedDefectiune: DefectiuneId;
  selectedDefectiuneIndex: number;
  error = '';
  errorMessage: string;
  editing = false;

  constructor(private defectiuneService: DefectiuneService, private router: Router, private location: Location, private nav: NavbarService) {
  }

  ngOnInit() {
    this.nav.show();
    this.defectiuneService.getDefectiuni().then(rsp => {
      this.defectiuni = rsp;
    }, err => {
      console.log(' error', err);
    });
  }

  onSelect(defectiune: DefectiuneId, index: number): void {
    this.selectedDefectiune = defectiune;
    this.selectedDefectiuneIndex = index;
  }

  goToAdd(): void {
    this.router.navigate(['/defectiune/adauga']);
  }

  delete(): void {
    if (confirm('Are you sure?')) {

      this.defectiuneService.deleteDefectiune(this.selectedDefectiune.Id)
        .subscribe(result => {
            console.log('Defectiunea a fost stearsa' + result);
            this.defectiuni.splice(this.selectedDefectiuneIndex, 1);
          },
          error => {
            this.errorMessage = error as any;
            this.error = 'A aparut o eroare!';
          });
    }
  }

  edit(): void {
    this.editing = true;
  }

  goBack(): void {
    this.location.back();
  }

  update(id, nume, cost) {
    this.defectiuneService.update(id, nume, cost)
      .then(rsp => {
        if (rsp === 'updated') {
          window.location.reload();
          this.editing = false;
        }
      }, error => {
        console.log('error', error);
      });
  }

}
