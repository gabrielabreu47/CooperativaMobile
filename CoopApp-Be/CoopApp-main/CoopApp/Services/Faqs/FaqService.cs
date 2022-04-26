using CoopApp.Context;
using CoopApp.Entities.Faqs;

namespace CoopApp.Services.Faqs
{
    public interface IFaqService : IBaseService<Faq>
    {

    }
    public class FaqService : BaseService<Faq>, IFaqService
    {
        public FaqService(IContext context) : base(context)
        {
        }
    }
}
