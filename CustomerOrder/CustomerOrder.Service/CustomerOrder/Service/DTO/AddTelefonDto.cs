using System;
using CustomerOrder.DAL;

namespace CustomerOrder.DTO
{
    public class AddTelefonDto
    {




        public string Brand { get; set; }
        public string Marca { get; set; }

        public static explicit operator AddTelefonDto(telefon v)
        {
            AddTelefonDto addTelefonDto = new AddTelefonDto();
            addTelefonDto.Brand = v.brand;
            addTelefonDto.Marca = v.marca;
            return addTelefonDto;
        }
    }
}