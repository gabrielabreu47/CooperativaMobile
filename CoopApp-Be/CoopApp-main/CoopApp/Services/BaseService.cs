using CoopApp.Context;
using CoopApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoopApp.Services
{
    public interface IBaseService<T> where T : BaseEntity
    {
        IQueryable<T> Query();
        Task<T> Get(int id);
        Task<T> Add(T entity);
        Task<T> Update(T entity);
        Task<T> Delete(int id);
    }
    public class BaseService<TEntity> : IBaseService<TEntity> where TEntity : BaseEntity
    {
        private readonly IContext _context;
        protected readonly DbSet<TEntity> _db;

        public BaseService(IContext context)
        {
            _context = context;
            _db = context.Set<TEntity>();
        }

        public virtual IQueryable<TEntity> Query()
        {
            return _db.AsQueryable();
        }
        public async Task<TEntity> Add(TEntity entity)
        {
            var result = await _db.AddAsync(entity);
            await _context.SaveChangesAsync();

            return result.Entity;
        }
        public async Task<TEntity> Delete(int id)
        {
            var entity = await Get(id);

            var result = _db.Remove(entity);
            await _context.SaveChangesAsync();

            return result.Entity;
        }
        public async Task<TEntity> Get(int id)
        {
            var entity = await _db.Where(x => x.Id == id).FirstOrDefaultAsync();
            return entity;
        }
        public async Task<TEntity> Update(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}
