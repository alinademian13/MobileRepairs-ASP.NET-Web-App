
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
    [Authorize]
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

            if (String.IsNullOrEmpty(addComandaDto1.DataInchidere))
            {
                cm.stare = false;
            }
            else
            {
                cm.DataInchidere = DateTime.ParseExact(addComandaDto1.DataInchidere, "yyyy-MM-dd", CultureInfo.InvariantCulture);
                cm.stare = true;
            }

            cm.defectiune = addComandaDto1.DefectiuneDtos;

            return Ok(comandaService.AddComanda(cm));
        }

        [HttpPut]

        public IHttpActionResult UpdateComanda([FromUri] int id, [FromUri] bool Stare, [FromUri] string DataInchidere)
        {
            return Ok(comandaService.updateComanda(id, Stare,DataInchidere));
        }

        [HttpDelete]
        public IHttpActionResult DeleteComanda([FromUri] int id)
        {
            return Ok(comandaService.delete(id));
        }

    }
}
