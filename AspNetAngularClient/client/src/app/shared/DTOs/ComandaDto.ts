import {TelefonDto} from './TelefonDto';

export class ComandaDto {
  idComanda: number;
  idClient: number;
  ClientName: string;
  EmployeeName: string;
  Telefon: TelefonDto;
  idUnicTelefon: number;
  stare: boolean;
  DataDeschidere: Date;
  DataInchidere: Date;
}
