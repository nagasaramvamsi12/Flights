const { StatusCodes } = require('http-status-codes');
const {CityRepository}=require('../repositories')
const {AppError}=require('../utils');
const cityRepository=new CityRepository();
async function createCity(data)
{
    try{
        const city =await cityRepository.create(data);
        return city;
    } catch(error){
        if(error.name==='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new Airplane cities',StatusCodes.INTERNAL_SERVER_ERROR);
}
}
async function getcities()
{
    try{
    const city=await cityRepository.getAll();
    return city;
    }catch(error){
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function getcity(id)
{
    try{
    const city=await cityRepository.get(id);
    return city;
    }catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('city not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function deletecity(id)
{
    try{
    const city=await cityRepository.destroy(id);
    return city;
    }catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('city not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function UpdateCity(id,data)
{
    try{
    const city=await cityRepository.update(id,data);
    return city;
    }catch(error){
        if(error.StatusCodes === StatusCodes.NOT_FOUND){
            throw new AppError('city not found',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update of city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports={
    createCity,
    getcities,
    getcity,
    deletecity,
    UpdateCity
}