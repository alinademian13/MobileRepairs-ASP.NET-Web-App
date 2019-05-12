using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerOrder.Dtos
{
    public class EditEmployeeDto
    {
        [Required]
        public int IdEmployee { get; set; }
        [Required]
        public string Name { get; set; }
        public string Password { get; set; }
    }
}