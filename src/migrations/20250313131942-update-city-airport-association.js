'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Only add the foreign key constraint
    await queryInterface.addConstraint('Airports', {
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      fields: ['cityId'], // Descriptive name
      references: {
        table: 'Cities', // Ensure this matches your database table name
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');
  }
};
