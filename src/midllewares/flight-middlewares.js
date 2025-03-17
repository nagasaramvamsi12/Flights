const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
const dateTimeCompare=require('../utils/helpers/datetime-helper');
const validateCreateRequest=(req,res,next)=>{
    if(!dateTimeCompare(req.body.arrivalTime,req.body.departureTime))
    {
        ErrorResponse.message="something went wrong while creating flight";
        ErrorResponse.error={explanation:"arrivalTime must be greater than departureTime"};
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse)
    }
    if(!req.body.flightNumber)
    {
        ErrorResponse.message="something went wrong while creatingflightNumber";
        ErrorResponse.error={explanation:"flightNumber not found in the oncoimg request"};
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse)
    }
    if(!req.body.airplaneId)
        {
            ErrorResponse.message="something went wrong while creating airplaneId";
            ErrorResponse.error={explanation:"airplaneId not found in the oncoimg request"};
            return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse)
        }
        if(!req.body.arrivalAirportId)
            {
                ErrorResponse.message="something went wrong while creating arrivalAirportId";
                ErrorResponse.error={explanation:"arrivalAirportId not found in the oncoimg request"};
                return res
                       .status(StatusCodes.BAD_REQUEST)
                       .json(ErrorResponse)
            }
            if(!req.body.arrivalTime)
                {
                    ErrorResponse.message="something went wrong while creating arrivalTime";
                    ErrorResponse.error={explanation:"arrivalTime not found in the oncoimg request"};
                    return res
                           .status(StatusCodes.BAD_REQUEST)
                           .json(ErrorResponse)
                }
                if(!req.body.departureTime)
                    {
                        ErrorResponse.message="something went wrong while creating departureTime";
                        ErrorResponse.error={explanation:"departureTime not found in the oncoimg request"};
                        return res
                               .status(StatusCodes.BAD_REQUEST)
                               .json(ErrorResponse)
                    }
                    if(!req.body.price)
                        {
                            ErrorResponse.message="something went wrong while creating price";
                            ErrorResponse.error={explanation:"price  not found in the oncoimg request"};
                            return res
                                   .status(StatusCodes.BAD_REQUEST)
                                   .json(ErrorResponse)
                        }
                            if(!req.body.totalSeats )
                                {
                                    ErrorResponse.message="something went wrong while creating totalSeats ";
                                    ErrorResponse.error={explanation:"totalSeats not found in the oncoimg request"};
                                    return res
                                           .status(StatusCodes.BAD_REQUEST)
                                           .json(ErrorResponse)
                                }

    next();
}
module.exports={validateCreateRequest}