import {TelefonDto} from './TelefonDto';
import {Defectiune} from './defectiune';

export class ComandaDtoList {

  IdComanda: number;
  ClientEmail: string;
  ClientName: string;
  EmployeeName: string;
  Telefon: TelefonDto;
  IdUnicTelefon: number;
  stare: boolean;
  DefectiuniDtos: Array<Defectiune>;
  DataDeschidere: string;
  DataInchidere: string;
}
