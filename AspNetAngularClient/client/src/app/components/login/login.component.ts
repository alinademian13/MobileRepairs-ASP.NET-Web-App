import {Component, Output, EventEmitter, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {Employee} from '../../shared/DTOs/employee';
import {ApiService} from '../../service/api.service';
import {AuthService} from '../../service/auth.service';
import {NavbarService} from '../../service/navbar.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'Mobile Repairs App';
  employees: Array<Employee>;
  itExist: boolean;
  error: string;
  Name: string;
  Password: string;
  @Output() loginName = new EventEmitter<string>();
  @Output() loginPassword = new EventEmitter<string>();

  constructor(private router: Router, private authService: AuthService, private api: ApiService, public nav: NavbarService) {

  }

  ngOnInit() {
    this.nav.hide();
  }

  login() {

    this.authService.login(this.Name, this.Password).then(rsp => {
      this.loginName.emit(this.Name);
      this.loginPassword.emit(this.Password);
      console.log("Received")
      this.router.navigateByUrl('/client');
    }, err => {

    });

  }

  getEmployees() {
    this.api.getEmployees().subscribe(
      employees => this.employees = employees,
      error => {
        return this.error = error as any;
      },
    );
  }

  //checkUser(name: string, password: string) {
  //  this.api.checkEmployee(name, password).then(rsp => {
  //    this.itExist = rsp;
  //    if (this.itExist) {
  //      this.router.navigate(['client']);
  //      this.nav.show();
  //    }
  //  }, err => {
  //    console.log('error', err);
  //  });
  //}

  signUp() {
    this.router.navigate(['signUp']);
  }


}





