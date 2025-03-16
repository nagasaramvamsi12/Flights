const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
const validateCreateRequest=(req,res,next)=>{
    if(!req.body.name)
    {
        ErrorResponse.message="something went wrong while creating airport";
        ErrorResponse.error={explanation:"name not found in the oncoimg request"};
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse)
    }
    if(!req.body.code)
        {
            ErrorResponse.message="something went wrong while creating airport";
            ErrorResponse.error={explanation:"code not found in the oncoimg request"};
            return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse)
        }
        if(!req.body.cityId)
            {
                ErrorResponse.message="something went wrong while creating airport";
                ErrorResponse.error={explanation:"CityId not found in the oncoimg request"};
                return res
                       .status(StatusCodes.BAD_REQUEST)
                       .json(ErrorResponse)
            }
    next();
}
module.exports={validateCreateRequest}