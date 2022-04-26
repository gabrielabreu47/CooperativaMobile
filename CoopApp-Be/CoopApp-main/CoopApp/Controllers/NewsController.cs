using CoopApp.Entities.News;
using CoopApp.Services;
using CoopApp.Services.News;

namespace CoopApp.Controllers
{
    public class NewsController : BaseController<New>
    {
        public NewsController(INewsService baseService) : base(baseService)
        {
        }
    }
}
