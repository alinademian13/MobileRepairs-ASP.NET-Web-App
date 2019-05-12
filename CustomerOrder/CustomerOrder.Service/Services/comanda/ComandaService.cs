using CustomerOrder.DTO;
using CustomerOrder.Service.DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CustomerOrder.Service.Services.comanda
{
    public class ComandaService : BaseService
    {
        public ComandaService() { }


        public IEnumerable<CustomerOrder.Service.DTO.ResponseComandaDto> GetComandaById(int id)
        {
            return DbContext.Comanda.Select(x => new CustomerOrder.Service.DTO.ResponseComandaDto()
            {
                idComanda = x.idComanda,
                idClient = x.idClient,

                ClientName = (from client in DbContext.client
                              where client.idClient == x.idClient
                              select client.nume).FirstOrDefault(),
                EmployeeName = (from employee in DbContext.employee
                                where employee.idEmployee == x.idEmployee
                                select employee.Name).FirstOrDefault(),

                Telefon = (from telefon in DbContext.telefon
                           where telefon.idTelefon == x.idTelefon
                           select (AddTelefonDto)telefon).FirstOrDefault(),
                idUnicTelefon = x.idUnicTelefon,
                stare = x.stare,
                DataDeschidere = x.DataDeschidere,
                DataInchidere = x.DataInchidere,
                DefectiuneDtos = x.defectiune,


            }).Where(n => n.idClient == id).ToList();

        }

        public IEnumerable<CustomerOrder.Service.DTO.ResponseComandaDto> GetComandaList()
        {




            return DbContext.Comanda.Select(x => new CustomerOrder.Service.DTO.ResponseComandaDto()
            {
                idComanda = x.idComanda,
                ClientName = (from client in DbContext.client
                              where client.idClient == x.idClient
                              select client.nume).Single(),
                EmployeeName = (from employee in DbContext.employee
                                where employee.idEmployee == x.idEmployee
                                select employee.Name).Single(),

                Telefon = (from telefon in DbContext.telefon
                           where telefon.idTelefon == x.idTelefon
                           select (AddTelefonDto)telefon).Single(),
                idUnicTelefon = x.idUnicTelefon,
                stare = x.stare,
                DataDeschidere = x.DataDeschidere,
                DataInchidere = x.DataInchidere,
                DefectiuneDtos = x.defectiune,


            }).ToList();
        }
        public String AddComanda(DAL.Comanda addComandaDto)
         {
           
             

            

            DbContext.Comanda.Add(addComandaDto);
            DbContext.SaveChanges();
            return "adaugat";
        }


        public bool updateComanda(int id, CustomerOrder.Service.DTO.EditComandaDto editComandaDto)
        {
            bool succes = false;

            DAL.Comanda t = DbContext.Comanda.Find(id);
            if (t != null)
            {
                t.idClient = editComandaDto.idClient;
                t.idEmployee = editComandaDto.idEmployee;
                t.idTelefon = editComandaDto.idTelefon;
                t.idUnicTelefon = editComandaDto.idUnicTelefon;
                t.stare = editComandaDto.stare;
                t.DataDeschidere = editComandaDto.DataDeschidere;
                t.DataInchidere = editComandaDto.DataInchidere;
                DbContext.SaveChanges();
                succes = true;
                return succes;
            }


            return succes;

        }


        public Boolean delete(int id)
        {

            bool succes = false;


            DAL.Comanda t = DbContext.Comanda.Find(id);
            if (t != null)
            {
                DbContext.Comanda.Remove(t);
                DbContext.SaveChanges();
                succes = true;
                return succes;
            }


            return succes;





        }



    }
}
