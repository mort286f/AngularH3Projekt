using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System;
using ClassRoomAPI.Models;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;


namespace ClassRoomAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassRoomController : ControllerBase
    {
        private readonly ClassRoomDBContext data;

        public ClassRoomController(ClassRoomDBContext context)
        {
            data = context;
        }

        [HttpGet]
        [Route("AllTemperatures")]
        public IQueryable<Temperature> GetTemp()
        {
            // Receives data from database!
            return data.Temperatures;
        }

        [HttpGet]
        [Route("AllLights")]
        public IQueryable<LightCondition> GetLight()
        {
            // Receives data from database!
            return data.LightConditions;
        }

        [HttpGet]
        [Route("AllNoises")]
        public IQueryable<NoiseLevel> GetNoise()
        {
            // Receives data from database!
            return data.NoiseLevels;
        }

        [HttpPost]
        [Route("AllPosts")]
        public HttpResponseMessage InsertIntoDB(double Temp, int Light, int Noise)
        {

            // Create objects!
            Temperature tData = new Temperature();
            LightCondition lData = new LightCondition();
            NoiseLevel nData = new NoiseLevel();

            string tComment = " ";
            string lComment = " ";
            string nComment = " ";

            // Using statements to determine which comment to add - depends on received data!
            if (Temp <= 20) { tComment = "It is chilly"; }
            if (Temp > 20) { tComment = "It is warm"; }
            if (Light <= 50) { lComment = "Light is turn off"; }
            if (Light > 50) { lComment = "Light is turn on"; }
            if (Noise <= 10) { nComment = "The db level is low"; }
            if (Noise > 10) { nComment = "The db level is high"; }

            // Adding data to database!
            tData.Temp = Temp;
            tData.TempComment = tComment;
            data.Temperatures.Add(tData);
            data.SaveChanges();

            // Adding data to database!
            lData.Light = Light;
            lData.LightComment = lComment;
            data.LightConditions.Add(lData);
            data.SaveChanges();

            // Adding data to database!
            nData.Noise = Noise;
            nData.NoiseComment = nComment;
            data.NoiseLevels.Add(nData);
            data.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}