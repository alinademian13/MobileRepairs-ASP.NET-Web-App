import {TelefonDto} from './TelefonDto';

export class ComandaDto {
  idClient: number;
  clientEmail: string;
  idEmployee: number;
  numeEmployee: string;
  telefon: TelefonDto;
  idUnicTelefon: number;
  stare: boolean;
  DataDeschidere: any=null;
  DataInchidere: any;
}
