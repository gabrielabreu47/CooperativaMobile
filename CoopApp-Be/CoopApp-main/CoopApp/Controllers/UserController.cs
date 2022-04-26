using CoopApp.Entities.Users;
using CoopApp.Services;
using CoopApp.Services.User;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http;

namespace CoopApp.Controllers
{
    public class UserController : BaseController<User>
    {
        private readonly IUserService _userService;

        public UserController(IUserService baseService) : base(baseService)
        {
            _userService = baseService;
        }

        [Microsoft.AspNetCore.Mvc.HttpGet("LogIn")]
        public async Task<IActionResult> LogIn([FromHeader] string dni, [FromHeader] string password)
        {
            var user = _userService.LogIn(dni, password);
            if (user == null) return BadRequest("User not found");
            return Ok(user);
        }

        [Microsoft.AspNetCore.Mvc.HttpGet("GetUserByDni")]
        public async Task<IActionResult> GetUserByDni([FromHeader] string dni)
        {
            var user = _userService.GetByDni(dni);
            if (user == null) return BadRequest("User not found");
            return Ok(user);
        }
    }
}
