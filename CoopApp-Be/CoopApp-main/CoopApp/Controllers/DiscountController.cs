using CoopApp.Entities.Discounts;
using CoopApp.Services;
using CoopApp.Services.Discounts;

namespace CoopApp.Controllers
{
    public class DiscountController : BaseController<Discount>
    {
        public DiscountController(IDiscountService baseService) : base(baseService)
        {
        }
    }
}
