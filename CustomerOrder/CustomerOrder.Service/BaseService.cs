using CustomerOrder.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerOrder.Service
{
   public class BaseService
    {
        protected MobileRepairs1Entities DbContext = new MobileRepairs1Entities();
    }
}
