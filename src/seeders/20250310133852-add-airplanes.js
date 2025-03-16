'use strict';
const {Op}=require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
       {
          modeNumber: 'Boeing747',
          capacity: 416,
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
          modeNumber: 'AirbusA340',
          capacity: 853,
          createdAt: new Date(),
          updatedAt: new Date()
       }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {[Op.or]:[{modeNumber: 'Boeing747'}, {modeNumber: 'AirbusA340'}]});
  }
};
