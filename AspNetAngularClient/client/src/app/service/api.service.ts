import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Employee} from './../shared/DTOs/employee';
import {environment} from 'src/environments/environment';
import {EmployeeId} from './../shared/Models/employeeId';
import {Comanda} from './../shared/Models/Comanda';
import {ComandaDtoList} from '../shared/DTOs/ComandaDtoList';
import {Defectiune} from '../shared/DTOs/defectiune';


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
             idUnicTelefon: number, stare: boolean, Defectiuni: Array<Defectiune>,
             DataDeschidere: any, DataInchidere: any): Observable<any> {


    const comanda = {
      idClient,
      idEmployee,
      idTelefon,
      idUnicTelefon,
      stare,
      Defectiuni,
      DataDeschidere,
      DataInchidere
    } as Comanda;

    return this.http.post(environment.apiurl + '/Comanda/AddComanda', comanda);
  }
  getUserDisplayName() {
    return this.http.get<any>(environment.apiurl + '/GetUserDisplay').toPromise();
  }
}
