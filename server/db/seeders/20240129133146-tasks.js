'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          description: 'Morning Exercise Routine',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'Grocery Shopping',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'Meeting Preparation',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'Home Cleaning',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'Budget Review',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'Learning Session',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
