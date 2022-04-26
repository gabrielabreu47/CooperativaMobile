using CoopApp.Entities;
using CoopApp.Entities.Accounts;
using CoopApp.Entities.Contacts;
using CoopApp.Entities.Discounts;
using CoopApp.Entities.Faqs;
using CoopApp.Entities.Investments;
using CoopApp.Entities.Loans;
using CoopApp.Entities.Movements;
using CoopApp.Entities.News;
using CoopApp.Entities.Users;
using CoopApp.Entities.Videos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Reflection;

namespace CoopApp.Context
{
    public interface IContext : IDisposable
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
    public class CoopContext : BaseDbContext, IContext
    {
        public CoopContext(DbContextOptions<CoopContext> options) : base(options)
        {

        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Faq> Faqs { get; set; }
        public DbSet<Investment> Investments { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Movement> Movements { get; set; }
        public DbSet<New> News { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Video> Videos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            foreach (var type in modelBuilder.Model.GetEntityTypes())
            {
                if (typeof(IBase).IsAssignableFrom(type.ClrType))
                    modelBuilder.SetSoftDeleteFilter(type.ClrType);
            }
        }
    }

    public static class EntityFrameworkModelBuilderExtensions
    {
        public static void SetSoftDeleteFilter(this ModelBuilder modelBuilder, Type entityType)
        {
            SetSoftDeleteFilterMethod.MakeGenericMethod(entityType).Invoke(null, new object[] { modelBuilder });
        }

        static readonly MethodInfo SetSoftDeleteFilterMethod = typeof(EntityFrameworkModelBuilderExtensions)
            .GetMethods(BindingFlags.Public | BindingFlags.Static)
            .Single(t => t.IsGenericMethod && t.Name == "SetSoftDeleteFilter");

        public static void SetSoftDeleteFilter<TEntity>(this ModelBuilder modelBuilder) where TEntity : class, IBase
        {
            modelBuilder.Entity<TEntity>().HasQueryFilter(x => !x.Deleted);
        }
    }
}
