using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace iWonder.Models
{
    public class DBConnect : DbContext
    {
        public DBConnect(DbContextOptions<DBConnect> options) : base(options)
        {

        }

        public DbSet<UserDetails> UserDetails {get;set;}
    }
}
