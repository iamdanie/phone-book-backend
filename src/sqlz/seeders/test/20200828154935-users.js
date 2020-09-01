'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [{
      id: 1001,
      name: 'Daniela Bravo',
      email: 'daniela.bravo@foo.com',
      password: 'edb37c12df0a6409161f19939e284a8c:2ead2b57a8a365f3b2ec68570372b284',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 1002,
      name: 'Clay Morrow',
      email: 'clay.samcro@bar.com',
      password: 'edb37c12df0a6409161f19939e284a8c:2ead2b57a8a365f3b2ec68570372b284',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
