using CustomerOrder.Service.Services.Telefon;
using System.Web.Http;

namespace CustomerOrder.Controllers
{
    public class TelefonController : ApiController
    {
        private TelefonService telefonService = new TelefonService();

        [HttpGet]
        public IHttpActionResult GetTelefoane()
        {
            return Ok(telefonService.GetTelefonList());
        }
        [HttpPost]

        public IHttpActionResult AddTelefon([FromBody] DTO.AddTelefonDto addTelefon)
        {

            return Ok(telefonService.AddTelefon(addTelefon));
        }
        [HttpPut]

        public IHttpActionResult UpdateTelefon ([FromUri] int id,[FromBody] DTO.EditTelefonDto editTelefonDto)
        {
            return Ok(telefonService.updateTelefon(id, editTelefonDto));
        }

        [HttpDelete]
        public IHttpActionResult DeleteTelefon([FromUri] int id)
        {
            return Ok(telefonService.delete(id));
        }

    }
}
