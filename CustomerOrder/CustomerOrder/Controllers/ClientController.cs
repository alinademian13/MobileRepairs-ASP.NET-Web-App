
using System.Web.Http;

namespace CustomerOrder.Controllers
{
    [Authorize]
    public class ClientController : ApiController

    {
        private Service.Services.Client.ClientService ClientService = new Service.Services.Client.ClientService();

        [HttpGet]
        public IHttpActionResult GetClients([FromUri] string filter, [FromUri] int skip = 0, [FromUri] int take = 10)
        {
            return Ok(ClientService.GetClients(filter, skip, take));
        }
        //[HttpGet]
        //public IHttpActionResult GetClient([FromUri] int id)
        //{
        //    return Ok(ClientService.GetClient(id));
        //}

        [HttpPost]
        public IHttpActionResult AddClient(DTO.AddClientDto addClientDto)
        {
            return Ok(ClientService.AddClient(addClientDto));
        }
        [HttpPut]
        public IHttpActionResult EditClient([FromUri] int id, [FromBody]DTO.EditClientDto editClientDto)
        {
            return Ok(ClientService.EditClient(id, editClientDto));
        }

        [HttpDelete]
        public IHttpActionResult DeleteClient(int id)
        {
            return Ok(ClientService.DeleteClient(id));
        }

    }
}

