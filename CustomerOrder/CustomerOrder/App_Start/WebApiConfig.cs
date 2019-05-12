using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CustomerOrder
{
    public static class WebApiConfig
    {
        public static object CorsPolicyBuilder { get; private set; }

        

        public static void Register(HttpConfiguration config)
        {

           
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.UseDataContractJsonSerializer = true; // defaults to false, but no harm done
            jsonFormatter.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
            jsonFormatter.SerializerSettings.Formatting = Formatting.None;
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            var cors = new EnableCorsAttribute("*", "*", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
           
            cors.SupportsCredentials = true;
            config.EnableCors(cors);
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            
           


        }
    }
}
