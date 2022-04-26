using CoopApp.Entities.Videos;
using CoopApp.Services.Videos;

namespace CoopApp.Controllers
{
    public class VideoController : BaseController<Video>
    {
        public VideoController(IVideoService baseService) : base(baseService)
        {
        }
    }
}
