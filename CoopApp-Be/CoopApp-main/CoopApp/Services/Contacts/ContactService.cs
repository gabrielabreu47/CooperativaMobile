using CoopApp.Context;
using CoopApp.Entities.Contacts;

namespace CoopApp.Services.Contacts
{
    public interface IContactService : IBaseService<Contact> { }
    public class ContactService : BaseService<Contact>, IContactService
    {
        public ContactService(IContext context) : base(context)
        {
        }
    }
}
