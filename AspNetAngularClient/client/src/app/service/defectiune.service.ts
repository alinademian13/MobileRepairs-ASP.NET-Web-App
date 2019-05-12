import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Defectiune } from './../shared/DTOs/defectiune';
import { DefectiuneId } from './../shared/Models/defectiuneId';

@Injectable({
  providedIn: 'root'
})
export class DefectiuneService {
  base: string = 'http://localhost:60097/api/defectiune/';

  constructor(private http: HttpClient) {
  }

  getDefectiuni() {
    return this.http.get<Defectiune[]>(this.base + 'getDefectiuni').toPromise();
  }

  addDefectiuni(nume, cost) {
    const defectiune = {Nume: nume, Cost: cost} as Defectiune;
    return this.http.post(this.base + 'AddDefectiune', defectiune).toPromise();
  }

  deleteDefectiune(id) {
    const url = `${this.base}DeleteDefectiune/${id}`;
    return this.http.delete<DefectiuneId>(url);
  }

  update(id, nume, cost) {
    const defectiuneDto = {Nume: nume, Cost: cost};
    const url = `${this.base}UpdateDefectiune/${id}`;
    return this.http.put(url, defectiuneDto).toPromise();
  }

}
