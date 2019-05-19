using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace CustomerOrder.Controllers
{
    public class BaseController : ApiController
    {
        public int LoggedUserID
        {
            get
            {
                return GetUserID();
            }
        }

        protected int GetUserID()
        {
            var identity = User as ClaimsPrincipal;
            var value = identity.Claims.FirstOrDefault(x => x.Type == "sub").Value;
            return Convert.ToInt32(value);
        }
    }
}
