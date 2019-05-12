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
        public int idComanda { get; set; }
        public Nullable<int> idClient { get; set; }
        public string ClientName { get; set; }
        public string EmployeeName { get; set; }
        public  AddTelefonDto Telefon { get; set; }
        public int idUnicTelefon { get; set; }
        public Nullable<bool> stare { get; set; }
        public Nullable<System.DateTime> DataDeschidere { get; set; }
        public Nullable<System.DateTime> DataInchidere { get; set; }
        public ICollection<DAL.defectiune> DefectiuneDtos { get; set; }


    }
}
