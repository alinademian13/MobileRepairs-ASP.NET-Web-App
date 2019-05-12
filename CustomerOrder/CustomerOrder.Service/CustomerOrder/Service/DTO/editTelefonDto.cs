using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerOrder.DTO
{
    public class EditTelefonDto
    {
        [Required]
        public int IdTelefon { get; set; }
        [Required]
        public string Brand { get; set; }
        public string Marca { get; set; }
    }
}