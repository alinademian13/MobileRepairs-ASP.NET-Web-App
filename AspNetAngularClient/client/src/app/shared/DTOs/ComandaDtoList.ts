import {TelefonDto} from './TelefonDto';
import {Defectiune} from './defectiune';

export class ComandaDtoList {

  idComanda: number;
  idClient: number;
  ClientName: string;
  EmployeeName: string;
  Telefon: TelefonDto;
  idUnicTelefon: number;
  stare: boolean;
  DefectiuniDtos: Array<Defectiune>;
  DataDeschidere: string;
  DataInchidere: string;
}
