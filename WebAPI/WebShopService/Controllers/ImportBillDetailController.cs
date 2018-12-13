using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class ImportBillDetailController : ApiController
    {
        [HttpGet]    
        public List<ImportBillDetail> GetImportBillDetailList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.ImportBillDetails.ToList();
        }

        [HttpGet]
        [Route("api/importdetail/{idBill}")]
        public List<ImportBillDetail> GetImportBillDetail(int idBill)
        {
            WebShopEntities db = new WebShopEntities();
            return db.ImportBillDetails.Where(x => x.idBill == idBill).ToList();
        }

        [HttpGet]
        public ImportBillDetail GetImportBillDetailById(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.ImportBillDetails.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public bool InsertImportBillDetail(ImportBillDetail newImportBillDetail)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                ImportBillDetail importBillDetail = new ImportBillDetail();
                importBillDetail.quantity = newImportBillDetail.quantity;
                importBillDetail.price = newImportBillDetail.price;
                importBillDetail.totalPrice = newImportBillDetail.totalPrice;
                importBillDetail.idProduct = newImportBillDetail.idProduct;
                importBillDetail.idBill = (from c in db.ImportBills orderby c.id descending select c.id).First();

                importBillDetail.id = (from c in db.ImportBillDetails orderby c.id descending select c.id).First() + 1;
                if (importBillDetail.id < 10)
                    importBillDetail.code = "IMTDT00" + importBillDetail.id;
                else if (importBillDetail.id >= 10 && importBillDetail.id < 100)
                    importBillDetail.code = "IMTDT0" + importBillDetail.id;
                else
                    importBillDetail.code = "IMTDT" + importBillDetail.id;

                db.ImportBillDetails.Add(importBillDetail);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateImportBillDetail(int id, ImportBillDetail newImportBillDetail)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                ImportBillDetail importBillDetail = db.ImportBillDetails.FirstOrDefault(x => x.id == id);
                if (importBillDetail == null) return false;
                importBillDetail.idProduct = newImportBillDetail.idProduct;
                importBillDetail.quantity = newImportBillDetail.quantity;
                importBillDetail.price = newImportBillDetail.price;
                importBillDetail.totalPrice = newImportBillDetail.totalPrice;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteImportBillDetail(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                ImportBillDetail importBillDetail = db.ImportBillDetails.FirstOrDefault(x => x.id == id);
                if (importBillDetail == null) return false;
                db.ImportBillDetails.Remove(importBillDetail);
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
