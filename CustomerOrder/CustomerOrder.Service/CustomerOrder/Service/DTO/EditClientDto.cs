using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerOrder.DTO
{
    public class EditClientDto
    {
        [Required]
        public int IdClient { get; set; }
        [Required]
        public string Email { get; set; }
        public string Nume { get; set; }
        public string Adresa { get; set; }
    }
}