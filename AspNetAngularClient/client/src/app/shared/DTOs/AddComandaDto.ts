import { TelefonDto } from './TelefonDto';

export class AddComandaDto {
  idClient: number;
  idEmployee: number;
  idTelefon: number;
  idUnicTelefon: number;
  stare: boolean;
  DataDeschidere: any;
  DataInchidere: any = null;
}
