using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerOrder.DTO
{
    public class AddEmployeeDto {
       


        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
    }
}