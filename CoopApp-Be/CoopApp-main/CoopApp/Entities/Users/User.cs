namespace CoopApp.Entities.Users
{
    public class User : BaseEntity
    {
        public string Dni { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
    }
}
