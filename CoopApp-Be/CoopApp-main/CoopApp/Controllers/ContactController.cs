using CoopApp.Entities.Contacts;
using CoopApp.Services;
using CoopApp.Services.Contacts;

namespace CoopApp.Controllers
{
    public class ContactController : BaseController<Contact>
    {
        public ContactController(IContactService baseService) : base(baseService)
        {
        }
    }
}
