using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.Services.Defectiune.Converter
{
    class DefectiuneConverter
    {
        public DAL.defectiune ConvertDtoToDal(DTO.AddDefectiuneDTO dto)
        {
            String nume = dto.Nume;
            Nullable<int> cost = dto.Cost;

            DAL.defectiune defectiune = new DAL.defectiune();
            defectiune.nume = nume;
            defectiune.cost = cost;

            return defectiune;
        }

        public DAL.defectiune convertDtoToDalWithId(CustomerOrder.Service.DTO.ResponseDefectiuneDto dto)
        {
            int id = dto.Id;
            String nume = dto.Nume;
            Nullable<int> cost = dto.Cost;

            DAL.defectiune defectiune = new DAL.defectiune();
            defectiune.idDefectiune = id;
            defectiune.nume = nume;
            defectiune.cost = cost;

            return defectiune;
        }

        //public ResponseDefectiuneDTO ConvertDalToDto(DAL.defectiune defectiune)
        //{
        //    int idDefectiune = defectiune.idDefectiune;
        //    String nume = defectiune.nume;
        //    Nullable<int> cost = defectiune.cost;

        //    ResponseDefectiuneDTO defectiuneDTO = new ResponseDefectiuneDTO();

        //    defectiuneDTO.Id = idDefectiune;
        //    defectiuneDTO.Nume = nume;
        //    defectiuneDTO.Cost = cost;

        //    return defectiuneDTO;
        //}
    }
}
