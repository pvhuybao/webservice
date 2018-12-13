using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class OrderDetailController : ApiController
    {
        [HttpGet]
        public List<OrderDetail> GetOrderDetailList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.OrderDetails.ToList();
        }

        [HttpGet]
        [Route("api/orderbilldetail/{idOrder}")]
        public List<OrderDetail> GetOrderBillDetail(int idOrder)
        {
            WebShopEntities db = new WebShopEntities();
            return db.OrderDetails.Where(x => x.idOrder == idOrder).ToList();
        }

        [HttpGet]        
        public OrderDetail GetOrderDetail(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.OrderDetails.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public bool InsertOrderDetail(OrderDetail newOrderDetail)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                OrderDetail orderDetail = new OrderDetail();

                orderDetail.idProduct = newOrderDetail.idProduct;
                orderDetail.quantity = newOrderDetail.quantity;
                orderDetail.price = newOrderDetail.price;
                orderDetail.totalPrice = newOrderDetail.totalPrice;
                orderDetail.nameProduct = newOrderDetail.nameProduct;
                orderDetail.idOrder = (from c in db.Orders orderby c.id descending select c.id).First();

                orderDetail.id = (from c in db.OrderDetails orderby c.id descending select c.id).First() + 1;
                if (orderDetail.id < 10)
                    orderDetail.code = "ORDT00" + orderDetail.id;
                else if (orderDetail.id >= 10 && orderDetail.id < 100)
                    orderDetail.code = "ORDT0" + orderDetail.id;
                else
                    orderDetail.code = "ORDT" + orderDetail.id;

                db.OrderDetails.Add(orderDetail);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateOrderDetail(int id, OrderDetail newOrderDetail)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                OrderDetail orderDetail = db.OrderDetails.FirstOrDefault(x => x.id == id);
                if (orderDetail == null) return false;
                orderDetail.idProduct = newOrderDetail.idProduct;
                orderDetail.quantity = newOrderDetail.quantity;
                orderDetail.price = newOrderDetail.price;
                orderDetail.totalPrice = newOrderDetail.totalPrice;                
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteOrderDetail(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                OrderDetail orderDetail = db.OrderDetails.FirstOrDefault(x => x.id == id);
                if (orderDetail == null) return false;
                db.OrderDetails.Remove(orderDetail);
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
