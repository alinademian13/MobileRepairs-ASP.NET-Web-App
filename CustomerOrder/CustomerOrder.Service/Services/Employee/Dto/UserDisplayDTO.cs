using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.Services.Employee.Dto
{
    public class UserDisplayDTO
    {
        public string UserName { get; set; }
        public string DisplayName
        {
            get
            {
                return "Welcome " + UserName;
            }
        }
    }
}
