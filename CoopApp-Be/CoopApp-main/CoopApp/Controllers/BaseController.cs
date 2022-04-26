using CoopApp.Entities;
using CoopApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Web.Http.OData;

namespace CoopApp.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class BaseController<TEntity> : ControllerBase where TEntity : BaseEntity
    {
        private readonly IBaseService<TEntity> _baseService;

        public BaseController(IBaseService<TEntity> baseService)
        {
            _baseService = baseService;
        }
        /// <summary>
        /// Get all by query options.
        /// </summary>
        /// <returns>A list of records.</returns>
        [HttpGet]
        [EnableQuery]
        public virtual IActionResult Get()
        {
            var list = _baseService.Query();
            return Ok(list);
        }

        /// <summary>
        /// Get a specific record by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>A specific record.</returns>
        [HttpGet("{id}")]
        public virtual async Task<IActionResult> GetById(int id)
        {
            var dto = await _baseService.Get(id);

            if (dto is null)
                return NotFound();

            return Ok(dto);
        }
        /// <summary>
        /// Creates a record.
        /// </summary>
        /// <returns>A newly created record.</returns>
        [HttpPost]
        public virtual async Task<IActionResult> Post([FromBody] TEntity entityDto)
        {
            entityDto = await _baseService.Add(entityDto);
            return CreatedAtAction(WebRequestMethods.Http.Get, new { id = entityDto.Id }, entityDto);
        }

        /// <summary>
        /// Updates a record.
        /// </summary>
        /// <returns>No Content.</returns>
        [HttpPut("{id}")]
        public virtual async Task<IActionResult> Put([FromRoute] int id, [FromBody] TEntity entityDto)
        {
            if (entityDto.Id != id)
                return BadRequest();

            entityDto = await _baseService.Update(entityDto);

            if (entityDto is null)
                return NotFound();

            return Ok(entityDto);
        }

        /// <summary>
        /// Deletes a specific record by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>A deleted record.</returns>
        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> Delete(int id)
        {
            var entityDto = await _baseService.Delete(id);

            if (entityDto is null)
                return NotFound();

            return Ok(entityDto);
        }
    }
}
