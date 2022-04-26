using CoopApp.Entities.Investments;
using CoopApp.Services;
using CoopApp.Services.Investments;

namespace CoopApp.Controllers
{
    public class InvestmentController : BaseController<Investment>
    {
        public InvestmentController(IInvestmentService baseService) : base(baseService)
        {
        }
    }
}
