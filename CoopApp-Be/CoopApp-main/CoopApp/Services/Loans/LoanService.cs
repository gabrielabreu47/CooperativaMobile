using CoopApp.Context;
using CoopApp.Entities.Loans;
using Microsoft.EntityFrameworkCore;

namespace CoopApp.Services.Loans
{
    public interface ILoanService : IBaseService<Loan>
    {

    }
    public class LoanService : BaseService<Loan>, ILoanService
    {
        public LoanService(IContext context) : base(context)
        {
        }
        public override IQueryable<Loan> Query()
        {
            return base.Query().Include(x => x.Movements);
        }
    }
}
