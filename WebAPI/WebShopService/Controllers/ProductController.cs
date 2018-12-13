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
            return db.Products.OrderByDescending(x => x.id).ToList();
        }

        [HttpGet]
        public Product GetProduct(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.Products.FirstOrDefault(x => x.id == id);
        }

        [HttpGet]
        [Route("api/product/category/{id}")]
        public List<Product> GetProductByCategory(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.Products.Where(c => c.idCategory == id).ToList();
        }

        [HttpGet]
        [Route("api/new/product")]
        public List<Product> GetNewProductList()
        {
            WebShopEntities db = new WebShopEntities();
            var a = (from c in db.Products
                     orderby c.id descending
                     select c).Take(8).ToList();            
            return a;
        }

        [HttpGet]
        [Route("api/discount/product")]
        public List<Product> GetDiscountProductList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.Products.OrderByDescending(c => c.discount).Take(4).ToList();
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
                product.salePrice = newProduct.price - (newProduct.price* newProduct.discount/100);

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
        [Route("api/updatequantity/{id}")]
        public bool UpdateQuantityProduct(int id, Product newProduct)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Product product = db.Products.FirstOrDefault(x => x.id == id);
                if (product == null) return false;                
                product.quantity = product.quantity - newProduct.quantity;
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
                product.salePrice = newProduct.price - (newProduct.price * newProduct.discount/100);
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

        [HttpGet]        
        public List<Product> SearchProduct(int id, string keyword)
        {            
            WebShopEntities db = new WebShopEntities();
            List<Product> list = new List<Product>();
            if(id == 0)
            {
                list = (from c in db.Products
                        where c.name.Contains(keyword)
                        select c).ToList();
            }
            else
            {
                list = (from c in db.Products
                        where c.idCategory == id && c.name.Contains(keyword)
                        select c).ToList();
            }

            return list;
        }
    }
}
