import {Defectiune} from '../DTOs/defectiune';
import {DefectiuneId} from "./defectiuneId";

export class Comanda {

  idClient: number;
  idEmployee: number;
  idTelefon: number;
  idUnicTelefon: number;
  stare: boolean;
  Defectiuni: Array<DefectiuneId>;
  DataDeschidere: any;
  DataInchidere: any = null;

}
