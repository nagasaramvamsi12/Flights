const {CityService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');
async function createCity(req,res)
{
    try{
        const city=await CityService.createCity({
              name:req.body.name
        });
        SuccessResponse.data=city;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function getcities(req,res)
{
    try{
        const city=await CityService.getcities();
        SuccessResponse.data=city;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function getcity(req,res)
{
    try{
        const city=await CityService.getcity(req.params.id);
        SuccessResponse.data=city;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function deletecity(req,res)
{
    try{
        const city=await CityService.deletecity(req.params.id);
        SuccessResponse.data=city;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function updateCity(req,res)
{
    try{
        const city=await CityService.UpdateCity(req.params.id,req.body);
        SuccessResponse.data=city;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
module.exports={
    createCity,
    getcities,
    getcity,
    deletecity,
    updateCity
}