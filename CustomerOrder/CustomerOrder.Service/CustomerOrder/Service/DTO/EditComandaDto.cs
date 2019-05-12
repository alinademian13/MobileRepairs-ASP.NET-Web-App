using System;
using System.Collections.Generic;

namespace CustomerOrder.Service.CustomerOrder.Service.DTO
{
    public class EditComandaDto
    {


        public int idComanda { get; set; }
        public Nullable<int> idClient { get; set; }
        public Nullable<int> idEmployee { get; set; }
        public Nullable<int> idTelefon { get; set; }
        public int idUnicTelefon { get; set; }
        public Nullable<bool> stare { get; set; }
        public Nullable<System.DateTime> DataDeschidere { get; set; }
        public Nullable<System.DateTime> DataInchidere { get; set; }
        public HashSet<ResponseDefectiuneDto> DefectiuneDtos { get; set; }


    }
}