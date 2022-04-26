using CoopApp.Entities.Faqs;
using CoopApp.Services;
using CoopApp.Services.Faqs;

namespace CoopApp.Controllers
{
    public class FaqController : BaseController<Faq>
    {
        public FaqController(IFaqService baseService) : base(baseService)
        {
        }
    }
}
