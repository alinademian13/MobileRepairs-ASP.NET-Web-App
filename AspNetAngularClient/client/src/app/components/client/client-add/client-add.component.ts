import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  clientForm: FormGroup;
  Nume = '';
  Email = '';
  Adresa = '';
  isLoadingResults = false;

  // matcher = new MyErrorStateMatcher();

  constructor(private clientService: ClientService, private formBuilder: FormBuilder, private router: Router, private nav: NavbarService) {
  }

  ngOnInit() {
    this.nav.show();
  }

//  onFormSubmit(form: NgForm) {
//    this.isLoadingResults = true;
//    //this.clientService.addClient(form)
//    //  .subscribe((res: { [x: string]: any; }) => {
//    //    const client = res['clientResponse'];
//    //    const id = client['Idclient'];
//    //    this.isLoadingResults = false;
//    //   // this.router.navigate(['/client-details', id]);
//    //  }, (err) => {
//    //    console.log(err);
//    //    this.isLoadingResults = false;
//    //  });
//  }
  addClient(nume: string, email: string, adresa: string) {
    this.clientService.addClient(nume, email, adresa).then(rsp => {
        if (rsp === 'added') {
          this.router.navigate(['/client']);

        }
      }, err => {
        console.log('error', err);
      }
    );
  }
}
