using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebShopService.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public List<User> GetUserList()
        {
            WebShopEntities db = new WebShopEntities();
            return db.Users.OrderByDescending(x => x.id).ToList();
        }

        [HttpGet] 
        public User GetUser(int id)
        {
            WebShopEntities db = new WebShopEntities();
            return db.Users.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        [Route("api/user/login")]
        public User LoginUser(User userLog)
        {
            WebShopEntities db = new WebShopEntities();
            User user = new User();
            var userLogin = (from c in db.Users
                             where c.username == userLog.username && c.password == userLog.password
                             select c).FirstOrDefault();
            user = userLogin;
            return user;
        }

        [HttpPost]
        [Route("api/user/username")]
        public User GetUsername(User userLog)
        {
            WebShopEntities db = new WebShopEntities();
            User user = new User();
            var usercheck = (from c in db.Users
                             where c.username == userLog.username
                             select c).FirstOrDefault();
            user = usercheck;
            return user;
        }

        [HttpPost]
        public bool InsertUser(User newUser)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                User user = new User();
                user.username = newUser.username;
                user.password = newUser.password;
                user.firstName = newUser.firstName;
                user.lastName = newUser.lastName;
                user.gender = newUser.gender;
                user.email = newUser.email;
                user.phone = newUser.phone;
                user.vip = newUser.vip;
                user.point = newUser.point;

                user.id = (from c in db.Users orderby c.id descending select c.id).First() + 1;
                if (user.id < 10)
                    user.code = "USR00" + user.id;
                else if (user.id >= 10 && user.id < 100)
                    user.code = "USR0" + user.id;
                else
                    user.code = "USR" + user.id;

                db.Users.Add(user);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateUser(int id, User newUser)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                User user = db.Users.FirstOrDefault(x => x.id == id);
                if (user == null) return false;
                user.username = newUser.username;
                user.password = newUser.password;
                user.firstName = newUser.firstName;
                user.lastName = newUser.lastName;
                user.gender = newUser.gender;
                user.email = newUser.email;
                user.phone = newUser.phone;
                user.vip = newUser.vip;
                user.point = newUser.point;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool DeleteUser(int id)
        {
            try
            {
                WebShopEntities db = new WebShopEntities();
                User user = db.Users.FirstOrDefault(x => x.id == id);
                if (user == null) return false;
                db.Users.Remove(user);
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
