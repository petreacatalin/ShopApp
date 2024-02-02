using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Cătălin",
                    Email = "catalin@test.com",
                    UserName = "catalin@test.com",
                    Address = new Address
                    {
                        FirstName = "Petrea",
                        LastName = "Cătălin",
                        Street = "Independenței nr. 6",
                        City = "Iași",
                        County = "Iași",
                        ZipCode = "735100"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}