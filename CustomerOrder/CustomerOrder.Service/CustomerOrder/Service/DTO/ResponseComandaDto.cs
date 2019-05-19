using CustomerOrder.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.CustomerOrder.Service.DTO
{
   public class ResponseComandaDto
    {
        public int IdComanda { get; set; }
        public Nullable<int> IdClient { get; set; }
        public string ClientEmail { get; set; }
        public string EmployeeName { get; set; }
        public  AddTelefonDto Telefon { get; set; }
        public int IdUnicTelefon { get; set; }
        public Nullable<bool> Stare { get; set; }
        public String DataDeschidere { get; set; }
        public String DataInchidere { get; set; }
        public ICollection<DAL.defectiune> DefectiuneDtos { get; set; }
    }
}
