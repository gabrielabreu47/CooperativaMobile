using CoopApp.Entities.Movements;

namespace CoopApp.Entities.Loans
{
    public class Loan : BaseEntity
    {
        public string Name { get; set; }
        public string Number { get; set; }
        public int Balance { get; set; }
        public List<Movement> Movements { get; set; }
    }
}
