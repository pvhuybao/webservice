using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class OrderController : ApiController
    {
        [HttpGet]
        public List<Order> GetOrderList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.Orders.ToList();
        }

        [HttpGet]
        public Order GetOrder(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.Orders.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public bool InsertOrder(Order newOrder)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Order order = new Order();
                order.email = newOrder.email;
                order.userId = newOrder.userId;
                order.address = newOrder.address;
                order.total = newOrder.total;
                order.status = newOrder.status;
                order.id = (from c in db.Orders orderby c.id descending select c.id).First() + 1;
                if (order.id < 10)
                    order.code = "OR00" + order.id;
                else if (order.id >= 10 && order.id < 100)
                    order.code = "OR0" + order.id;
                else
                    order.code = "OR" + order.id;

                db.Orders.Add(order);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateOrder(int id, Order newOrder)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Order order = db.Orders.FirstOrDefault(x => x.id == id);
                if (order == null) return false;
                order.email = newOrder.email;
                order.userId = newOrder.userId;
                order.address = newOrder.address;
                order.total = newOrder.total;
                order.status = newOrder.status;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteOrder(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                Order order = db.Orders.FirstOrDefault(x => x.id == id);
                if (order == null) return false;
                db.Orders.Remove(order);
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
