const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories')
const {AppError}=require('../utils');
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
module.exports={
    createFlight
}