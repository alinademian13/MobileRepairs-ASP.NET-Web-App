using CustomerOrder.DTO;
using System;
using System.Collections.Generic;
using System.Linq;


namespace CustomerOrder.Service.Services.Employee
{
    public class EmployeeService : BaseService
    {
        public EmployeeService()
        {

        }

        public IEnumerable<ResponseEmployeeDto> GetEmployee()
        {
            return DbContext.employee.Select(x => new ResponseEmployeeDto()
            {

                idEmployee=x.idEmployee,
                Name = x.Name,
                Password = x.Password
            }).ToList();
        }

        public bool CheckEmployee(string name, string password)
        {
            bool itExist = false;

            foreach (ResponseEmployeeDto dto in GetEmployee())
            {
                if (dto.Name == name && dto.Password == password)
                {
                    itExist = true;
                }
            }


            return itExist;


        }

        public String AddEmployee(AddEmployeeDto addEmployeeDto)
        {
            DAL.employee em = new DAL.employee();
            em.Name = addEmployeeDto.Name;
            em.Password = addEmployeeDto.Password;


            DAL.employee em1 = DbContext.employee.Where(n => n.Name == addEmployeeDto.Name && n.Password == addEmployeeDto.Password).SingleOrDefault();
            if (em == em1)
            {

                return "Deja exista";
            }


            DbContext.employee.Add(em);
            DbContext.SaveChanges();
            return "adaugat";
        }


    }


}

