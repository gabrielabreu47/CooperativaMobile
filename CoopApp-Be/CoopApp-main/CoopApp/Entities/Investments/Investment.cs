namespace CoopApp.Entities.Investments
{
    public class Investment : BaseEntity
    {
        public string Name { get; set; }
        public string Number { get; set; }
        public int Balance { get; set; }
        public DateTimeOffset Invested_at { get; set; }
        public decimal Amount_invested { get; set; }
        public decimal Yield { get; set; }
    }
}
