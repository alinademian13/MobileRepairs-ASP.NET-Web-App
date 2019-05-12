using System.ComponentModel.DataAnnotations;

namespace CustomerOrder.DTO
{
    public class AddClientDto
    {
        [Required]
        public string Email { get; set; }
        public string Nume { get; set; }
        public string Adresa { get; set; }

    }
}