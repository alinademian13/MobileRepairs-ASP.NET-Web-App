using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.Services.Defectiune
{
   public class DefectiuneService:BaseService
    {

        Defectiune.Converter.DefectiuneConverter defectiuneConverter = new Defectiune.Converter.DefectiuneConverter();
        public IEnumerable<CustomerOrder.Service.DTO.ResponseDefectiuneDto> GetDefectiuni()
        {
            var rsp = DbContext.defectiune.Select(x => new CustomerOrder.Service.DTO.ResponseDefectiuneDto()
            {
                Id = x.idDefectiune,
                Nume = x.nume,
                Cost = x.cost
            });
            return rsp.ToList();
        }

        public String AddDefectiune(DTO.AddDefectiuneDTO addDefectiuneDTO)
        {
            DAL.defectiune defectiunedal = defectiuneConverter.ConvertDtoToDal(addDefectiuneDTO);

            DbContext.defectiune.Add(defectiunedal);

            DbContext.SaveChanges();

            return "SUCCES";
        }

        public String DeleteDefectiune(int idDefectiune)
        {
            DbContext.defectiune.Remove(DbContext.defectiune.Find(idDefectiune));
            DbContext.SaveChanges();

            return "Succes";
        }

        public bool UpdateDefectiune(int id, DTO.AddDefectiuneDTO defectiuneDto)
        {
            DAL.defectiune defectiune = (from def in DbContext.defectiune where def.idDefectiune == id select def).FirstOrDefault();

            if (defectiune != null)
            {
                defectiune.nume = defectiuneDto.Nume;
                defectiune.cost = defectiuneDto.Cost;

                DbContext.SaveChanges();
            }
            return true;
        }
    }
}
