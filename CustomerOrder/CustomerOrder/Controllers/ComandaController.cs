
using CustomerOrder.Service.Services.comanda;
using System.Web.Http;
using CustomerOrder.Service.DTO;
using CustomerOrder.Service.CustomerOrder.Service.DTO;
using System;
using System.Globalization;

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

        public IHttpActionResult AddComanda([FromUri] int idClient, [FromUri] int idEmployee, [FromUri] int idTelefon, [FromUri] int idUnicTelefon, [FromUri] bool stare, [FromUri] string DataDeschidere, [FromUri] string DataInchidere)
        {
            DAL.Comanda cm = new DAL.Comanda();
            cm.idClient = idClient;
            cm.idEmployee = idEmployee;
            cm.idTelefon = idTelefon;
            cm.idUnicTelefon = idUnicTelefon;
            cm.stare = stare;
            cm.DataDeschidere = DateTime.ParseExact(DataDeschidere, "d/M/yyyy h:mm", CultureInfo.InvariantCulture);
            cm.DataInchidere = DateTime.ParseExact(DataInchidere, "d/M/yyyy h:mm", CultureInfo.InvariantCulture);
            return Ok(comandaService.AddComanda(cm));
        }
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
