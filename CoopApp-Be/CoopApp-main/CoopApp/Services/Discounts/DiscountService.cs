using CoopApp.Context;
using CoopApp.Entities.Discounts;

namespace CoopApp.Services.Discounts
{
    public interface IDiscountService : IBaseService<Discount>
    {

    }
    public class DiscountService : BaseService<Discount>, IDiscountService
    {
        public DiscountService(IContext context) : base(context)
        {
        }
    }
}
