const CrudRepository=require('./crud-repository');
const {Flight,Airplane,Airport}=require('../models');
const Sequelize=require('sequelize');
class FlightRepository extends CrudRepository
{
    constructor()
    {
        super(Flight);
    }
    async getAllFlights(filter,sort)
    {
        const response=await Flight.findAll({
               where:filter,
               order:sort,
               include:[{
                  model:Airplane,
                  required:true
               },
              {
                mode:Airport,
                required:true,
                as:'departureAirport',
                on:{
                     
                }
             
               }]
        });
        return response;
    }
}
module.exports = FlightRepository;