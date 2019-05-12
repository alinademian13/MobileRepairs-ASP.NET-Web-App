using CustomerOrder.DTO;
using System;
using System.Collections.Generic;
using System.Linq;



namespace CustomerOrder.Service.Services.Telefon
{
    public class TelefonService : BaseService
    {

        public TelefonService() { }

        public IEnumerable<DTO.ResponseTelefonDto> GetTelefonList()
        {
            return DbContext.telefon.Select(x => new DTO.ResponseTelefonDto()
            {

                IdTelefon = x.idTelefon,
                Brand = x.brand,
                Marca = x.marca
            }).ToList();
        }

        public String AddTelefon(AddTelefonDto addTelefonDto)
        {
            DAL.telefon em = new DAL.telefon();
            em.brand = addTelefonDto.Brand;
            em.marca = addTelefonDto.Marca;


            DAL.telefon em1 = DbContext.telefon.Where(n => n.brand == addTelefonDto.Brand && n.marca == addTelefonDto.Brand).SingleOrDefault();
            if (em == em1)
            {

                return "Deja exista";
            }


            DbContext.telefon.Add(em);
            DbContext.SaveChanges();
            return "adaugat";
        }

        public bool updateTelefon(int id, EditTelefonDto editTelefonDto)
        {
            bool succes = false;

            DAL.telefon t = DbContext.telefon.Find(id);
            if (t != null)
            {
                t.brand = editTelefonDto.Brand;
                t.marca = editTelefonDto.Marca;
                DbContext.SaveChanges();
                succes = true;
                return succes;
            }


            return succes;

        }


        public Boolean delete(int id)
        {

            bool succes = false;


            DAL.telefon t = DbContext.telefon.Find(id);
            if (t != null)
            {
                DbContext.telefon.Remove(t);
                DbContext.SaveChanges();
                succes = true;
                return succes;
            }


            return succes;





        }


    }
}
