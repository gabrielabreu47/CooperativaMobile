using CoopApp.Entities.Movements;
using CoopApp.Services;
using CoopApp.Services.Movements;

namespace CoopApp.Controllers
{
    public class MovementController : BaseController<Movement>
    {
        public MovementController(IMovementService baseService) : base(baseService)
        {
        }
    }
}
