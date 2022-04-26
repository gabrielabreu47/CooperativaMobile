using CoopApp.Entities.Accounts;
using CoopApp.Entities.Loans;

namespace CoopApp.Entities.Movements
{
    public class Movement : BaseEntity
    {
        public DateTimeOffset Date { get; set; }
        public string Description { get; set; }
        public string TransactionId { get; set; }
        public string Type { get; set; }
        public decimal Amount { get; set; }
        public int? AccountId { get; set; }
        public int? LoanId { get; set; }
    }
}
