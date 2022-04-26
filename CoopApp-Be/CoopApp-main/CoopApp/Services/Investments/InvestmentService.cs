using CoopApp.Context;
using CoopApp.Entities.Investments;

namespace CoopApp.Services.Investments
{
    public interface IInvestmentService : IBaseService<Investment>
    {

    }
    public class InvestmentService : BaseService<Investment>, IInvestmentService
    {
        public InvestmentService(IContext context) : base(context)
        {
        }
    }
}
