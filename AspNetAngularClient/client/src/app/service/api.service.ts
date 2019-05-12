import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import { Employee } from './../shared/DTOs/employee';
import { environment} from 'src/environments/environment';
import { EmployeeId } from './../shared/Models/employeeId';
import { Comanda } from './../shared/Models/Comanda';
import { TelefonDto } from './../shared/DTOs/TelefonDto';
import { ComandaDto } from './../shared/DTOs/ComandaDto';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('goooooooooooooooooollllll'); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployees(): Observable<EmployeeId[]> {
    return this.http.get<EmployeeId[]>(environment.apiurl + '/Employee/GetEmployee');
  }

  checkEmployee(name, password) {
    return this.http.get<boolean>(environment.apiurl + '/Employee/CheckEmployee?name=' + name + '&password=' + password).toPromise();
    // return this.http.get<Employee[]>(environment.apiurl + "/Employee/CheckEmployee");
  }

  signUp(Name: string, Password: string) {
    const employee = {Name, Password} as Employee;
    console.log(employee);
    return this.http.post<String>(environment.apiurl + '/Employee/AddEmployee', employee).toPromise();
  }

  getComandaById(id: number): Promise<ComandaDto[]> {
    return this.http.get<ComandaDto[]>(environment.apiurl + '/Comanda/GetComandaById?id=' + id).toPromise();
  }

  addComanda(idClient: number, idEmployee: number, idTelefon: number,
             idUnicTelefon: number, stare: boolean, DataDeschidere: any, DataInchidere: any) {
    // tslint:disable-next-line:prefer-const
    const DataDeschidere1 = new Date(DataDeschidere.year, DataDeschidere.month, DataDeschidere.day);
    // tslint:disable-next-line:prefer-const
    const DataInchidere1 = new Date(DataInchidere.year, DataInchidere.month, DataInchidere.day);
    console.log(DataDeschidere1);
     let dd1: number;
    // tslint:disable-next-line:prefer-const

    // tslint:disable-next-line:prefer-const
    // let DataInchidere1 = null;
    dd1 = DataDeschidere1.getDate();
    let MM1 = DataDeschidere1.getMonth();
    let yyyy1 = DataDeschidere1.getFullYear();
    let HH1 = DataDeschidere1.getHours();
    let mm1 = DataDeschidere1.getMinutes();
    let ss1 = DataDeschidere1.getSeconds();
    let Time = dd1 + '/' + MM1 + '/' + yyyy1 + ' ' + HH1 + ':' + mm1 + ':' + ss1 as string;
    console.log(Time)
    let dd = DataInchidere1.getDay();
    let MM = DataInchidere1.getMonth();
    let yyyy = DataInchidere1.getFullYear();
    let HH = DataInchidere1.getHours();
    let mm = DataInchidere1.getMinutes();
    let ss = DataInchidere1.getSeconds();
    let Time1 = dd + '/' + MM + '/' + yyyy + ' ' + HH + ':' + mm + ':' + ss as string;

    const comanda = {idClient, idEmployee, idTelefon, idUnicTelefon, stare, DataDeschidere, DataInchidere} as Comanda;
    return this.http.post<String>(environment.apiurl + '/Comanda/AddComanda?idClient='
      + idClient + '&idEmployee=' + idEmployee + '&idTelefon=' +
      idTelefon + '&idUnicTelefon=' + idUnicTelefon + '&stare=' +
      stare + '&DataDeschidere=' + Time + '&DataInchidere=' + Time1, comanda).toPromise();
  }
}
