using CoopApp.Context;
using CoopApp.Entities.Videos;

namespace CoopApp.Services.Videos
{
    public interface IVideoService : IBaseService<Video>
    {

    }
    public class VideoService : BaseService<Video>, IVideoService
    {
        public VideoService(IContext context) : base(context)
        {
        }
    }
}
