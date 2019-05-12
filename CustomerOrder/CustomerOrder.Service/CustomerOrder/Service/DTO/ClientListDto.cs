using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.DTO
{
  public  class ClientListDto
    {
        public IEnumerable<ClientResponseDto> ClientList { get; set; } = new List<ClientResponseDto>();
        public int Count { get; set; }

    }
}
