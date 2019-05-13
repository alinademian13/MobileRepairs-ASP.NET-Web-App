import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Employee} from './../shared/DTOs/employee';
import {environment} from 'src/environments/environment';
import {EmployeeId} from './../shared/Models/employeeId';
import {Comanda} from './../shared/Models/Comanda';
import {TelefonDto} from './../shared/DTOs/TelefonDto';
import {ComandaDto} from './../shared/DTOs/ComandaDto';
import {ComandaDtoList} from "../shared/DTOs/ComandaDtoList";


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

  getComandaById(id: number): Promise<ComandaDtoList[]> {
    return this.http.get<ComandaDtoList[]>(environment.apiurl + '/Comanda/GetComandaById?id=' + id).toPromise();
  }

  addComanda(idClient: number, idEmployee: number, idTelefon: number,
             idUnicTelefon: number, stare: boolean, DataDeschidere: any, DataInchidere: any) {

    const DataDeschidere1 = DataDeschidere + ' ' + '00' + ':' + '00' as string;
    console.log(DataDeschidere1);

    const DataInchidere1 = DataInchidere + ' ' + '00' + ':' + '00' as string;

    //  "yyyy-MM-dd HH:mm"


    const comanda = {
      idClient,
      idEmployee,
      idTelefon,
      idUnicTelefon,
      stare,
      DataDeschidere,
      DataInchidere
    } as ComandaDto;

    return this.http.post(environment.apiurl + '/Comanda/AddComanda', comanda).toPromise();
  }
}
