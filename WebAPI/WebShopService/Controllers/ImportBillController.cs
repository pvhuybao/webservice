using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class ImportBillController : ApiController
    {
        [HttpGet]
        public List<ImportBill> GetImportBillList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.ImportBills.OrderByDescending(x => x.id).ToList();
        }

        [HttpGet]
        public ImportBill GetImportBill(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.ImportBills.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public bool InsertImportBill(ImportBill newImportBill)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                ImportBill importBill = new ImportBill();
                importBill.agencyName = newImportBill.agencyName;
                importBill.address = newImportBill.address;
                importBill.phone = newImportBill.phone;
                importBill.total = newImportBill.total;
                importBill.date = newImportBill.date;
                importBill.id = (from c in db.ImportBills orderby c.id descending select c.id).First() + 1;
                if (importBill.id < 10)
                    importBill.code = "IMT00" + importBill.id;
                else if (importBill.id >= 10 && importBill.id < 100)
                    importBill.code = "IMT0" + importBill.id;
                else
                    importBill.code = "IMT" + importBill.id;

                db.ImportBills.Add(importBill);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateImportBill(int id, ImportBill newImportBill)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                ImportBill importBill = db.ImportBills.FirstOrDefault(x => x.id == id);
                if (importBill == null) return false;                
                importBill.agencyName = newImportBill.agencyName;
                importBill.code = newImportBill.code;
                importBill.address = newImportBill.address;
                importBill.date = newImportBill.date;
                importBill.phone = newImportBill.phone;
                importBill.total = newImportBill.total;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteImportBill(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                ImportBill importBill = db.ImportBills.FirstOrDefault(x => x.id == id);
                if (importBill == null) return false;
                db.ImportBills.Remove(importBill);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpGet]
        [Route("api/Import/statistical")]
        public List<ImportBill> GetImportSta(DateTime? start, DateTime? end)
        {
            WebShopEntities db = new WebShopEntities();
            List<ImportBill> result = new List<ImportBill>();
            var query = (from c in db.ImportBills
                         where c.date >= start && c.date <= end
                         select c).ToList();
            result = query;

            return result;
        }
    }
}
