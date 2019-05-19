import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../service/navbar.service';
import {AuthService} from 'src/app/service/auth.service';
import {Router} from '@angular/router';
import {ApiService} from 'src/app/service/api.service';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // displayUser: any;

  constructor(private auth: AuthService, private apiService: ApiService, private router: Router, public nav: NavbarService) {

  }

  ngOnInit() {
    // if (this.isAuth())
    //  this.getUserDisplay();
    this.auth.onLoggedIn.subscribe(_ => {
      // this.getUserDisplay();
    });
    this.auth.onLoggedOut.subscribe(_ => {
    });
  }

  // getUserDisplay() {
  //  this.apiService.getUserDisplayName().then(rsp => {
  //    this.displayUser = rsp;
  //  });
  // }

  isAuth = () => {
    return this.auth.isAuth();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}


