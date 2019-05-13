
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

        public IHttpActionResult AddComanda([FromBody] AddComandaDto addComandaDto) { 
  
            DAL.Comanda cm = new DAL.Comanda();
            cm.idClient = addComandaDto.idClient;
            cm.idEmployee = addComandaDto.idEmployee;
            cm.idTelefon = addComandaDto.idTelefon;
            cm.idUnicTelefon = addComandaDto.idUnicTelefon;
            cm.stare = addComandaDto.stare;
            cm.DataDeschidere = DateTime.ParseExact(addComandaDto.DataDeschidere, "yyyy-MM-dd H:m", CultureInfo.InvariantCulture);
            cm.DataInchidere = DateTime.ParseExact(addComandaDto.DataInchidere, "yyyy-MM-dd H:m", CultureInfo.InvariantCulture);
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
