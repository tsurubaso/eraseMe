using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using eraseMe.Models;

namespace eraseMe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly DbtestContext _dbtestContext;
        public EmployeeController(DbtestContext dbtestContext)
        {
            _dbtestContext = dbtestContext;
        }

        [HttpGet]
        [Route("GetEmployees")]
        public IActionResult GetEmployeed()
        {
            List<Employee>List = _dbtestContext.Employees.ToList();
            return StatusCode(StatusCodes.Status200OK, List);

        }








    }
}
