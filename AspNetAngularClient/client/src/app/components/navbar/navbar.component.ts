import { Component } from '@angular/core';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public nav: NavbarService) {

  }
}
