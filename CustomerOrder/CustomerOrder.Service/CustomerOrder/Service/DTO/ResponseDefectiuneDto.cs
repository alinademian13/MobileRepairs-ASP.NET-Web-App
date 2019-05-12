using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.CustomerOrder.Service.DTO
{
   public class ResponseDefectiuneDto

    {
        [Required]
        public int Id { get; set; }
        public string Nume { get; set; }
        public Nullable<int> Cost { get; set; }
    }
}
