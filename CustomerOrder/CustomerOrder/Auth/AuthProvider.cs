using CustomerOrder.Service.Services.AuthService;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace CustomerOrder.Auth
{
    public class MyAuthProvider : OAuthAuthorizationServerProvider
    {
        AuthService AuthService = new AuthService();

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            //context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            var userID = AuthService.Login(context.UserName, context.Password);
            if (userID == 0)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }
            //using (AuthRepository _repo = new AuthRepository())
            //{
            //    IdentityUser user = await _repo.FindUser(context.UserName, context.Password);

            //    if (user == null)
            //    {
            //        context.SetError("invalid_grant", "The user name or password is incorrect.");
            //        return;
            //    }
            //}

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim("sub", userID.ToString()));
            //identity.AddClaim(new Claim("role", "user"));

            context.Validated(identity);
        }
    }
}