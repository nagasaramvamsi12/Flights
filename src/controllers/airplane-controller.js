const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');
async function createAirplane(req,res)
{
    try{
        const airplane=await AirplaneService.createAirplane({
              modeNumber:req.body.modeNumber,
              capacity:req.body.capacity
        });
        SuccessResponse.data=airplane;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function getAirplanes(req,res)
{
    try{
        const airplane=await AirplaneService.getAirplanes();
        SuccessResponse.data=airplane;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function getAirplane(req,res)
{
    try{
        const airplane=await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function Deleteirplane(req,res)
{
    try{
        const airplane=await AirplaneService.deleteAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}
async function updateAirplane(req,res)
{
    try{
        const airplane=await AirplaneService.UpdateAirplane(req.params.id,req.body);
        SuccessResponse.data=airplane;
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
    createAirplane,
    getAirplanes,
    getAirplane,
    Deleteirplane,
    updateAirplane
}