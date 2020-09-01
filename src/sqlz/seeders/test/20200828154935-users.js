'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [{
      id: 1001,
      name: 'Daniela Bravo',
      email: 'daniela.bravo@foo.com',
      password: 'Password123$',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 1002,
      name: 'Clay Morrow',
      email: 'clay.samcro@bar.com',
      password: 'Password123$',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
