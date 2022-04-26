using CoopApp.Context;
using CoopApp.Entities.Movements;

namespace CoopApp.Services.Movements
{
    public interface IMovementService : IBaseService<Movement>
    {

    }
    public class MovementService : BaseService<Movement>, IMovementService
    {
        public MovementService(IContext context) : base(context)
        {
        }
    }
}
