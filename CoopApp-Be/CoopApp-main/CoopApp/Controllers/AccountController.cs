using CoopApp.Entities.Accounts;
using CoopApp.Services.Accounts;
using Microsoft.AspNetCore.Mvc;

namespace CoopApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : BaseController<Account>
    {
        public AccountController(IAccountService accountService) : base(accountService)
        {
        }
    }
}
