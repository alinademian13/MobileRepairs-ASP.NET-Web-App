using CustomerOrder.Service.Services.Employee;

using System.Web.Http;

namespace CustomerOrder.Controllers
{



    public class EmployeeController : ApiController
    {

        private EmployeeService EmployeeService = new EmployeeService();


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

    }
}
