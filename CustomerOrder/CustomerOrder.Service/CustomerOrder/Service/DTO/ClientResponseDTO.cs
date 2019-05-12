using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.DTO
{
  public  class ClientResponseDto
    {
       
            public int ID_Client { get; set; }
            public string Email { get; set; }
            public string Nume { get; set; }
            public string Adresa { get; set; }
        }
   }

