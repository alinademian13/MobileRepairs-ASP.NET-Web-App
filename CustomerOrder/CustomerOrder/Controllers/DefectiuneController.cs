using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CustomerOrder.Controllers
{
    [Authorize]
    public class DefectiuneController : ApiController
    {

        private Service.Services.Defectiune.DefectiuneService DefectiuneService = new Service.Services.Defectiune.DefectiuneService();

        [HttpGet]
        public IHttpActionResult GetDefectiuni()
        {
            return Ok(DefectiuneService.GetDefectiuni());
        }

        [HttpPost]
        public IHttpActionResult AddDefectiune(Service.Services.Defectiune.DTO.AddDefectiuneDTO dto)
        {
            return Ok(DefectiuneService.AddDefectiune(dto));
        }

        [HttpDelete]
        public IHttpActionResult DeleteDefectiune(int id)
        {
            return Ok(DefectiuneService.DeleteDefectiune(id));
        }

        [HttpPut]
        public IHttpActionResult UpdateDefectiune([FromUri]int id, [FromBody]Service.Services.Defectiune.DTO.AddDefectiuneDTO defectiuneDto)
        {
            return Ok(DefectiuneService.UpdateDefectiune(id, defectiuneDto));
        }

    }
}
