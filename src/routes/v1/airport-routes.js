const express=require('express');
const {AirportMiddlewares}=require('../../midllewares');
const router=express.Router();
const {AirportController}=require('../../controllers');
router.post('/',AirportMiddlewares.validateCreateRequest ,AirportController.createAirport);
router.get('/',AirportController.getairports);
router.get('/:id',AirportController.getairport);
router.delete('/:id',AirportController.DeleteAirport);
router.patch('/:id', AirportController.updateAirport);

module.exports=router;