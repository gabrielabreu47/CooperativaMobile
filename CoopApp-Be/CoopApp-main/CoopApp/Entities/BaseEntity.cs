namespace CoopApp.Entities
{
    public interface IBase
    {
        int Id { get; set; }
        bool Deleted { get; set; }
    }
    public class BaseEntity : IBase
    {
        public int Id { get; set; }
        public bool Deleted { get; set; }
    }
}
