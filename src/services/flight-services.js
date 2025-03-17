const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories')
const {AppError}=require('../utils');
const {Op}=require('sequelize');
const flightRepository=new FlightRepository();
async function createFlight(data)
{
    try{
        const flights =await flightRepository.create(data);
        return flights;
    } catch(error){
        if(error.name==='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
}
}
async function getAllFlights(query) {
    let customFilter={};
    if(query.trips)
    {
        [departureAirportId,arrivalAirportId]=query.trips.split("-");
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
    }
    if(query.price)
    {
        [minPrice,maxPrice]=query.price.split("-");
         customFilter.price={
            [Op.between]:[minPrice,((maxPrice==undefined)? 20000: maxPrice)]
         }
    }
    if(query.travellers)
    {
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate)
    {
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+" 23:59:00"]
        }
    }
    if(query.sort)
    {
        const params=query.sort.split(",");
        const sortFilters=params.map((param)=>param.split("_"));
        sortFilter=sortFilters;
    }
    try{
         const flights=await flightRepository.getAllFlights(customFilter,sortFilter);
         return flights;
    }catch(error)
    {
        throw new AppError('Cannot fetch data of all Flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports={
    createFlight,
    getAllFlights
}