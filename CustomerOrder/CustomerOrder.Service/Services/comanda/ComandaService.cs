using CustomerOrder.DTO;
using CustomerOrder.Service.CustomerOrder.Service.DTO;
using CustomerOrder.Service.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity.SqlServer;
using System.Globalization;
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
                IdComanda = x.idComanda,
                IdClient = x.idClient,

                ClientEmail = (from client in DbContext.client
                               where client.idClient == x.idClient
                               select client.email).FirstOrDefault(),
                EmployeeName = (from employee in DbContext.employee
                                where employee.idEmployee == x.idEmployee
                                select employee.Name).FirstOrDefault(),
                Telefon = new AddTelefonDto()
                {
                    Brand = x.telefon.brand,
                    Marca = x.telefon.marca
                },

                IdUnicTelefon = x.idUnicTelefon,
                Stare = x.stare,
                DataDeschidere = x.DataDeschidere != null ? SqlFunctions.DateName("dd", x.DataDeschidere) + " " + SqlFunctions.DateName("MM", x.DataDeschidere) + " " + SqlFunctions.DateName("yyyy", x.DataDeschidere) : String.Empty,
                DataInchidere = x.DataInchidere != null ? SqlFunctions.DateName("dd", x.DataInchidere) + " " + SqlFunctions.DateName("MM", x.DataInchidere) + " " + SqlFunctions.DateName("yyyy", x.DataInchidere) : String.Empty,
                DefectiuneDtos = x.defectiune,


            }).Where(n => n.IdClient == id).ToList();

        }

        public IEnumerable<ResponseComandaDto> GetComandaList()
        {

            var result = DbContext.Comanda.Select(x => new CustomerOrder.Service.DTO.ResponseComandaDto()
            {
                IdComanda = x.idComanda,
                ClientEmail = (from client in DbContext.client
                               where client.idClient == x.idClient
                               select client.email).FirstOrDefault(),
                EmployeeName = (from employee in DbContext.employee
                                where employee.idEmployee == x.idEmployee
                                select employee.Name).FirstOrDefault(),

                Telefon = new AddTelefonDto()
                {
                    Brand = x.telefon.brand,
                    Marca = x.telefon.marca
                },
                IdUnicTelefon = x.idUnicTelefon,
                Stare = x.stare,
                DataDeschidere = x.DataDeschidere != null ? SqlFunctions.DateName("dd", x.DataDeschidere) + " " + SqlFunctions.DateName("MM", x.DataDeschidere) + " " + SqlFunctions.DateName("yyyy", x.DataDeschidere) : String.Empty,
                DataInchidere = x.DataInchidere != null ? SqlFunctions.DateName("dd", x.DataInchidere) + " " + SqlFunctions.DateName("MM", x.DataInchidere) + " " + SqlFunctions.DateName("yyyy", x.DataInchidere) : String.Empty,
                DefectiuneDtos = x.defectiune,
            }).OrderBy(x => x.DataInchidere).ToList();
            return result;
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
