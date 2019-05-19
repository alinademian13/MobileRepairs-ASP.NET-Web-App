using CustomerOrder.Service.Services.Employee;

using System.Web.Http;

namespace CustomerOrder.Controllers
{
    [Authorize]


    public class EmployeeController : BaseController
    {

         EmployeeService EmployeeService = new EmployeeService();


        [HttpGet]
        public IHttpActionResult GetEmployee()
        {
            return Ok( EmployeeService.GetEmployee());
        }


        [HttpGet]

        public IHttpActionResult CheckEmployee([FromUri]string name ,[FromUri] string password)
        {
            return Ok(EmployeeService.CheckEmployee(name, password));
        }

        [HttpPost]

        public IHttpActionResult AddEmployee([FromBody] DTO.AddEmployeeDto addEmployee)
        {
          
            return Ok(EmployeeService.AddEmployee(addEmployee));
        }

        //[HttpGet]
        //public IHttpActionResult GetUserDisplay()
        //{
        //    return Ok(EmployeeService.GetDisplayName(LoggedUserID));
        //}

    }
}
