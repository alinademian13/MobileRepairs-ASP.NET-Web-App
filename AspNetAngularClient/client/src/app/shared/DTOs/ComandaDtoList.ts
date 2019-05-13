import {TelefonDto} from './TelefonDto';

export class ComandaDtoList {
  idComanda: number;
  idClient: number;
  ClientName: string;
  EmployeeName: string;
  Telefon: TelefonDto;
  idUnicTelefon: number;
  stare: boolean;
  DataDeschidere: string;
  DataInchidere: string;
}
