using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace Gravel
{
  public class Startup
  {
    private readonly IConfiguration _configuration;

    public Startup(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();
      services.AddSwaggerGen(options => options.SwaggerDoc("v1", new Info {Title = "Gravel", Version = "v1"}));
      services.AddSpaStaticFiles(options => options.RootPath = "ClientApp/build");
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (!env.IsDevelopment())
      {
        app.UseHsts();
      }

      app.UseMvc();
      app.UseSwagger();
      app.UseSwaggerUI(s => s.SwaggerEndpoint("/swagger/v1/swagger.json", "Gravel Players V1"));
      app.UseSpaStaticFiles();
      app.UseSpa(spa =>
      {
        spa.Options.SourcePath = "ClientApp";
        if (env.IsDevelopment())
        {
          spa.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
        }
      });
    }
  }
}
