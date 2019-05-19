using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service.Services.AuthService
{
    public class AuthService : BaseService
    {
        public int Login(string username, string password)
        {
            var user = DbContext.employee.FirstOrDefault(x => x.Name == username && x.Password == password);
            return user == null ? 0 : user.idEmployee;
        }

    }
}
