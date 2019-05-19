using CustomerOrder.Service.Services.AuthService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
namespace CustomerOrder.Controllers
{
    public class AuthController : BaseController
    {
        AuthService AuthService = new AuthService();



        [Authorize]
        [HttpGet]
        public IHttpActionResult Test()
        {
            int userID = GetUserID();
            return Ok("Works");
        }

        [HttpGet]
        public IHttpActionResult Test1()
        {
            int userID = GetUserID();
            return Ok("Works");
        }
    }
}
