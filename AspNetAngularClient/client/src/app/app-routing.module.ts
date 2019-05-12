import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/signUp/signUp.component';
import { AuthGuardService } from './guards/auth-guard';

import { ClientComponent } from './components/client/client.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';

import { TelefonComponent } from './components/telefon/telefon.component';

import { DefectiuneListComponent } from './components/defectiune/defectiune-list/defectiune-list.component';
import { DefectiuneAddComponent } from './components/defectiune/defectiune-add/defectiune-add.component';

import { ComandaComponent } from './components/comanda/comanda.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'comanda', component: ComandaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mobileRepairs', component: AppComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'signUp', component: SingUpComponent},
  {path: 'telefon', component: TelefonComponent},
  { path: 'defectiune', component: DefectiuneListComponent },
  { path: 'defectiune/adauga', component: DefectiuneAddComponent },
  {
    path: 'client',
    component: ClientComponent,
    data: {title: 'List of Clients'}
  },
  {
    path: 'client-detail/:id',
    component: ClientDetailComponent,
    data: {title: 'client details'}
  },
  {
    path: 'client-add',
    component: ClientAddComponent,
    data: {title: 'Add Client'}
  }
  //  canActivate: [AuthGuardService] - din path clients
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
