const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
const validateCreateRequest=(req,res,next)=>{
    if(!req.body.modeNumber)
    {
        ErrorResponse.message="something went wrong while creating airplane";
        ErrorResponse.error={explanation:"Model Number not found in the oncoimg request"};
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse)
    }
    next();
}
module.exports={validateCreateRequest}