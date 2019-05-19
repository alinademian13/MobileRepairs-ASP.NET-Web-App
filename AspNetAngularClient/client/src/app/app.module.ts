import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbdDatepickerComponent } from './components/datepicker/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/signUp/signUp.component';
import { AuthGuardService } from './guards/auth-guard';
import { AuthService } from './service/auth.service';

import { ClientComponent } from './components/client/client.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';
import { ClientService } from './service/client.service';

import { TelefonComponent } from './components/telefon/telefon.component';
import { TelefonService } from './service/telefon.service';

import { DefectiuneAddComponent } from './components/defectiune/defectiune-add/defectiune-add.component';
import { DefectiuneListComponent } from './components/defectiune/defectiune-list/defectiune-list.component';
import { DefectiuneService } from './service/defectiune.service';

import { ComandaComponent } from './components/comanda/comanda.component';
import { ComandaService } from './service/comanda.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './service/navbar.service';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    ClientComponent,
    TelefonComponent,
    ClientDetailComponent,
    ClientAddComponent,
    DefectiuneAddComponent,
    DefectiuneListComponent,
    ComandaComponent,
    NgbdDatepickerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,

    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbdDatepickerComponent
  ],
  providers: [AuthGuardService, AuthService, TelefonService, ClientService, DefectiuneService, ComandaService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
