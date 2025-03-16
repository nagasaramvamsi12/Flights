const express=require('express');
const router=express.Router();
const {CityController}=require('../../controllers');
const {CityMiddlewares}=require('../../midllewares');
router.post('/',CityMiddlewares.validateCreateRequest,CityController.createCity);
router.get('/',CityController.getcities);
 router.get('/:id',CityController.getcity);
 router.delete('/:id',CityController.deletecity);
 router.patch('/:id',CityController.updateCity);
module.exports=router;
 