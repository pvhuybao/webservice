using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class CategoryController : ApiController
    {
        [HttpGet]
        //[Route("api/category")]
        public List<Category> GetCategoryList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.Categories.ToList();
        }

        [HttpGet]
        //[Route("api/category/{id}")]
        public Category GetCategory(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.Categories.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public bool InsertCategory(Category newCategory)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Category category = new Category();
                category.name = newCategory.name;
                category.description = newCategory.description;
                category.id = (from c in db.Categories orderby c.id descending select c.id).First() + 1;
                if (category.id < 10)
                    category.code = "CAT00" + category.id;
                else if (category.id >= 10 && category.id < 100)
                    category.code = "CAT0" + category.id;
                else
                    category.code = "CAT" + category.id;

                db.Categories.Add(category);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateCategory(int id, Category newCategory)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Category category = db.Categories.FirstOrDefault(x => x.id == id);
                if (category == null) return false;
                category.code = newCategory.code;
                category.name = newCategory.name;
                category.description = newCategory.description;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteCategory(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Category category = db.Categories.FirstOrDefault(x => x.id == id);
                if (category == null) return false;
                db.Categories.Remove(category);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
