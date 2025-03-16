const { StatusCodes } = require('http-status-codes');
const {AirportRepository}=require('../repositories')
const {AppError}=require('../utils');
const airportrepository=new AirportRepository();
async function createAirport(data)
{
    try{
        const airport =await airportrepository.create(data);
        return airport;
    } catch(error){
        if(error.name==='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
}
}
async function getAirports()
{
    try{
    const airports=await airportrepository.getAll();
    return airports;
    }catch(error){
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function getAirport(id)
{
    try{
    const airport=await airportrepository.get(id);
    return airport;
    }catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('Airport not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Airport not found',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function deleteAirport(id)
{
    try{
    const airport=await airportrepository.destroy(id);
    return airport;
    }catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('Airplane not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function UpdateAirport(id,data)
{
    try{
    const airplane=await airportrepository.update(id,data);
    return airplane;
    }catch(error){
        if(error.StatusCodes === StatusCodes.NOT_FOUND){
            throw new AppError('Airplane not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    UpdateAirport
}