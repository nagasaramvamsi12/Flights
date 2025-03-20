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
async function getFlight(id) {
    try{
        const flight=await flightRepository.get(id);
        return flight;
        }catch(error){
            if(error.StatusCodes==StatusCodes.NOT_FOUND){
                throw new AppError('Flight you requested is not present',StatusCodes.NOT_FOUND);
            }
            throw new AppError('cannot fetch data of all flights',StatusCodes.INTERNAL_SERVER_ERROR);
        }
    
}
async function updateSeats(data)
{
    try{
        const response=await flightRepository.updateReaminingSeats(data.flightId,data.seats,data.dec);
        return response;
    }catch(error){
        console.log(error);
        throw new AppError('Cannot update data of flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}