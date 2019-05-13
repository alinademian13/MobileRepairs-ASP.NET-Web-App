using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.DTO
{
    public class AddComandaDto
    {
        
        public Nullable<int> idClient { get; set; }
        public Nullable<int> idEmployee { get; set; }
        public Nullable<int> idTelefon { get; set; }
        public int idUnicTelefon { get; set; }
        public Nullable<bool> stare { get; set; }
        public String DataDeschidere { get; set; }
        public String DataInchidere { get; set; }
      //  public HashSet<CustomerOrder.Service.DTO.ResponseDefectiuneDto> DefectiuneDtos { get; set; }
    }
}
