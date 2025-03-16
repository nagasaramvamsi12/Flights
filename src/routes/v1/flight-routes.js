const express=require('express');
const {FlightMiddlewares}=require('../../midllewares');
const router=express.Router();
const {FlightController}=require('../../controllers');
router.post('/',FlightMiddlewares.validateCreateRequest ,FlightController.createFlight);
module.exports=router;