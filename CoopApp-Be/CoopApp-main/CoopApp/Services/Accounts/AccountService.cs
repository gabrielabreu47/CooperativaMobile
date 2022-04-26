using CoopApp.Context;
using CoopApp.Entities.Accounts;
using Microsoft.EntityFrameworkCore;

namespace CoopApp.Services.Accounts
{
    public interface IAccountService : IBaseService<Account>
    {

    }
    public class AccountService : BaseService<Account>, IAccountService
    {
        public AccountService(IContext context) : base(context)
        {
        }

        public override IQueryable<Account> Query()
        {
            return base.Query().Include(x => x.Movements);
        }
    }
}
