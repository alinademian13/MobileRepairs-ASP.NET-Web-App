using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.CustomerOrder.Service.DTO
{
    public class ComandaListDto
    {
        public IEnumerable<ResponseComandaDto> ComandaList { get; set; } = new List<ResponseComandaDto>();
    }
}
