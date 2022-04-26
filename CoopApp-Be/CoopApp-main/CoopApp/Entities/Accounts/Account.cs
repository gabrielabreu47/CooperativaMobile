using CoopApp.Entities.Movements;

namespace CoopApp.Entities.Accounts
{
    public class Account : BaseEntity
    {
        public string Name { get; set; }
        public string Number { get; set; }
        public decimal Balance { get; set; }
        public List<Movement> Movements { get; set; }
    }
}
