using CoopApp.Context;
using CoopApp.Entities.News;

namespace CoopApp.Services.News
{
    public interface INewsService : IBaseService<New>
    {

    }
    public class NewService : BaseService<New>, INewsService
    {
        public NewService(IContext context) : base(context)
        {
        }
    }
}
