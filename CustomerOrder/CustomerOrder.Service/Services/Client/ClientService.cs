using CustomerOrder.DTO;
using System;
using System.Linq;


namespace CustomerOrder.Service.Services.Client
{
    public class ClientService : BaseService
    {
        public DTO.ClientListDto GetClients(string filter, int skip, int take)
        {
            bool filterClient = true;
            if (string.IsNullOrEmpty(filter))
                filterClient = false;
            var qry = DbContext.client.Where(x =>

                filterClient ? x.email.Contains(filter) : true

            ).OrderBy(x => x.idClient);

            var count = qry.Count();
            var result = qry.Skip(skip).Take(take).Select(x => new DTO.ClientResponseDto()
            {
                ID_Client = x.idClient,
                Email = x.email,
                Nume = x.nume,
                Adresa = x.adresa,
            });
            return new DTO.ClientListDto()
            {
                ClientList = result,
                Count = count
            };
        }
        //public ClientResponseDto GetClient( int id)
        //{
        //    bool filterClient = true;
        //    if (id == 0)
        //    {
        //        filterClient = false;
        //    }
        //    //var qry = DbContext.client.Where(x => x.idClient.Equals(id) 
        //    var qry = DbContext.client.Where(x =>

        //        filterClient ? x.idClient.Equals(id) : true


        //    ).OrderBy(x => x.idClient);


        //    var result = qry.Select(x => new ClientResponseDto()
        //    {
        //        ID_Client = x.idClient,
        //        Email = x.email,
        //        Nume = x.nume,
        //        Adresa = x.adresa,
        //    });
        //    var i = result.ToList()[0];
        //    Console.WriteLine(result.ToList().GetRange(0, 1));
        //    return i;
        //}
        //public IEnumerable<ClientResponseDto> GetClients()
        //{
        //    var rsp = DbContext.client.Select(x => new ClientResponseDto()
        //    {
        //        ClientId= x.idClient,
        //        Email=x.email,
        //        Nume = x.nume,
        //        Adresa=x.adresa,
        //    });
        //    return rsp.ToList();
        //}

        public String AddClient(AddClientDto addClientDto)
        {
            Console.WriteLine(addClientDto);
            DAL.client client = new
                DAL.client();
            client.adresa = addClientDto.Adresa;
            client.nume = addClientDto.Nume;
            client.email = addClientDto.Email;

            var rsp = DbContext.client.Add(client);
            DbContext.SaveChanges();
            return "added";
        }
        public String EditClient(int id, EditClientDto editClientDto)
        {

            var client = DbContext.client.First(a => a.idClient == id);

            client.adresa = editClientDto.Adresa;
            client.nume = editClientDto.Nume;
            client.email = editClientDto.Email;

            DbContext.SaveChanges();
            return "updated";
        }
        public String DeleteClient(int id)
        {
            DbContext.client.Remove(DbContext.client.Find(id));


            DbContext.SaveChanges();
            return "deleted";
        }

    }
}
