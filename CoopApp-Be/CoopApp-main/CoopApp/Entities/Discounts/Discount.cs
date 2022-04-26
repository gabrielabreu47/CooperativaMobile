namespace CoopApp.Entities.Discounts
{
    public class Discount : BaseEntity
    {
        public string Title { get; set; }
        public decimal Percentage_discounted { get; set; }
        public string Description { get; set; }
    }
}
