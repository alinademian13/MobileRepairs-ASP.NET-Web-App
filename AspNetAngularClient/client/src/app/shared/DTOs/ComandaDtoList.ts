import {TelefonDto} from './TelefonDto';
import {Defectiune} from './defectiune';

export class ComandaDtoList {

  IdComanda: number;
  ClientEmail: string;
  EmployeeName: string;
  Telefon: TelefonDto;
  IdUnicTelefon: number;
  Stare: boolean;
  DefectiuniDtos: Array<Defectiune>;
  DataDeschidere: string;
  DataInchidere: string;
}
