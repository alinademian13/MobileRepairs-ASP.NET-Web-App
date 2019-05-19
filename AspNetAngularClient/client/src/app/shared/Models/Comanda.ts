import {Defectiune} from '../DTOs/defectiune';

export class Comanda {

  idClient: number;
  idEmployee: number;
  idTelefon: number;
  idUnicTelefon: number;
  stare: boolean;
  Defectiuni: Array<Defectiune>;
  DataDeschidere: Date;
  DataInchidere: Date;

}
