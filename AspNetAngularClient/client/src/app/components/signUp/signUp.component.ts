import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'singUp-component',
  templateUrl: '/signUp.component.html'

})


export class SingUpComponent {
  msg: String;


  constructor(private api: ApiService,
              private router: Router) {
  }


  signUp(Name: string, Password: string) {

    this.api.signUp(Name, Password).then(ras => {
      this.msg = ras;
      // tslint:disable-next-line:triple-equals
      if (this.msg == 'adaugat') {

        this.router.navigate(['login']);
      } else {
        console.log('eroare');
      }

    });
  }
}
