using CoopApp.Entities.Loans;
using CoopApp.Services;
using CoopApp.Services.Loans;

namespace CoopApp.Controllers
{
    public class LoanController : BaseController<Loan>
    {
        public LoanController(ILoanService baseService) : base(baseService)
        {
        }
    }
}
