
using CustomerOrder.Service.Services.comanda;
using System.Web.Http;
using CustomerOrder.Service.DTO;
using CustomerOrder.Service.CustomerOrder.Service.DTO;
using System;
using System.Globalization;
using Newtonsoft.Json;
using System.Collections.Generic;
using CustomerOrder.DAL;

namespace CustomerOrder.Controllers
{
    public class ComandaController : ApiController
    {
        private ComandaService comandaService = new ComandaService();

        [HttpGet]
        public IHttpActionResult GetComandaList()
        {
            return Ok(comandaService.GetComandaList());
        }

        [HttpGet]
        public IHttpActionResult GetComandaById([FromUri] int id)
        {
            return Ok(comandaService.GetComandaById(id));
        }

        [HttpPost]
        public IHttpActionResult AddComanda([FromBody] AddComandaDto addComandaDto1)
        {

            DAL.Comanda cm = new DAL.Comanda();
            cm.idClient = addComandaDto1.idClient;
            cm.idEmployee = addComandaDto1.idEmployee;
            cm.idTelefon = addComandaDto1.idTelefon;
            cm.idUnicTelefon = addComandaDto1.idUnicTelefon;
            cm.stare = addComandaDto1.stare;
            cm.DataDeschidere = DateTime.ParseExact(addComandaDto1.DataDeschidere, "yyyy-MM-dd", CultureInfo.InvariantCulture);
            if (cm.DataInchidere == null)
            {
                addComandaDto1.DataInchidere = "";
                addComandaDto1.stare = false;
            } else
            {
                cm.DataInchidere = DateTime.ParseExact(addComandaDto1.DataInchidere, "yyyy-MM-dd", CultureInfo.InvariantCulture);
            }
            cm.defectiune = addComandaDto1.DefectiuneDtos;

            return Ok(comandaService.AddComanda(cm));
        }

        //[HttpPost]
        //public IHttpActionResult AddComanda([FromBody] int idClient, 
        //                                    [FromBody] int idEmployee, 
        //                                    [FromBody] int idTelefon, 
        //                                    [FromBody] int idUnicTelefon,
        //                                    [FromBody] bool? stare, 
        //                                    [FromBody] string dataDeschidere,
        //                                    [FromBody] string dataInchidere,
        //                                    [FromBody] ICollection<defectiune> defectiuni)
        //{

        //    DAL.Comanda cm = new DAL.Comanda();
        //    cm.idClient = idClient;
        //    cm.idEmployee = idEmployee;
        //    cm.idTelefon = idTelefon;
        //    cm.idUnicTelefon = idUnicTelefon;
        //    cm.stare = stare;
        //    cm.DataDeschidere = DateTime.ParseExact(dataDeschidere, "yyyy-MM-dd", CultureInfo.InvariantCulture);
        //    cm.DataInchidere = DateTime.ParseExact(dataInchidere, "yyyy-MM-dd", CultureInfo.InvariantCulture);
        //    cm.defectiune = defectiuni;

        //    return Ok(comandaService.AddComanda(cm));
        //}


        [HttpPut]

        public IHttpActionResult UpdateComanda([FromUri] int id, [FromBody] EditComandaDto editComandaDto)
        {
            return Ok(comandaService.updateComanda(id, editComandaDto));
        }

        [HttpDelete]
        public IHttpActionResult DeleteComanda([FromUri] int id)
        {
            return Ok(comandaService.delete(id));
        }

    }
}
