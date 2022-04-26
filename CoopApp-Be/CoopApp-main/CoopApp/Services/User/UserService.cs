using CoopApp.Context;
using UserEntity = CoopApp.Entities.Users;
namespace CoopApp.Services.User
{
    public interface IUserService : IBaseService<UserEntity.User>
    {
        UserEntity.User LogIn(string dni, string password);
        UserEntity.User GetByDni(string dni);
    }
    public class UserService : BaseService<UserEntity.User>, IUserService
    {
        public UserService(IContext context) : base(context)
        {
        }
        public UserEntity.User LogIn(string dni, string password)
        {
            var user = _db.Where(x => x.Password == password && x.Dni == dni).FirstOrDefault();
            return user;
        }

        public UserEntity.User GetByDni(string dni)
        {
            var user = _db.Where(x=> x.Dni == dni).FirstOrDefault();
            return user;
        }
        
    }
}
