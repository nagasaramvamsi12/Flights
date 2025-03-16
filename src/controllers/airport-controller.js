const {AirportService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');
async function createAirport(req,res)
{
    try{
        const airport=await AirportService.createAirport({
              name:req.body.name,
              code:req.body.code,
              address:req.body.address,
              cityId:req.body.cityId
        });
        SuccessResponse.data=airport;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function getairports(req,res)
{
    try{
        const airport=await AirportService.getAirports();
        SuccessResponse.data=airport;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function getairport(req,res)
{
    try{
        const airport=await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airport;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function DeleteAirport(req,res)
{
    try{
        const airport=await AirportService.deleteAirport(req.params.id);
        SuccessResponse.data=airport;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function updateAirport(req,res)
{
    try{
        const airporte=await AirportService.updateAirport(req.params.id,req.body);
        SuccessResponse.data=airport;
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
    createAirport,
    getairports,
    getairport,
    DeleteAirport,
    updateAirport
}