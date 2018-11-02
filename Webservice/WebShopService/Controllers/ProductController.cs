using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class ProductController : ApiController
    {
        [HttpGet]
        public List<Product> GetProductList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.Products.ToList();
        }

        [HttpGet]
        public Product GetProduct(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.Products.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public bool InsertProduct(Product newProduct)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Product product = new Product();
                product.name = newProduct.name;
                product.description = newProduct.description;
                product.id = (from c in db.Products orderby c.id descending select c.id).First() + 1;
                if (product.id < 10)
                    product.code = "PRO00" + product.id;
                else if (product.id >= 10 && product.id < 100)
                    product.code = "PRO0" + product.id;
                else
                    product.code = "PRO" + product.id;
                product.detail = newProduct.detail;
                product.idCategory = newProduct.idCategory;
                product.price = newProduct.price;
                product.quantity = newProduct.quantity;
                product.image = newProduct.image;
                product.discount = newProduct.discount;

                db.Products.Add(product);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateProduct(int id, Product newProduct)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Product product = db.Products.FirstOrDefault(x => x.id == id);
                if (product == null) return false;
                product.code = newProduct.code;
                product.name = newProduct.name;
                product.description = newProduct.description;
                product.detail = newProduct.detail;
                product.idCategory = newProduct.idCategory;
                product.price = newProduct.price;
                product.quantity = newProduct.quantity;
                product.image = newProduct.image;
                product.discount = newProduct.discount;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteProduct(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Product product = db.Products.FirstOrDefault(x => x.id == id);
                if (product == null) return false;
                db.Products.Remove(product);
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
