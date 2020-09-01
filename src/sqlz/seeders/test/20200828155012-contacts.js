'use strict';

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert('Contacts', [{
      id: 1001,
      userId: 1001,
      firstName: 'Daniela',
      lastName: 'Bravo',
      phone: '+5215536392781',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 1002,
      userId: 1002,
      firstName: 'Jackson',
      lastName: 'Teller',
      phone: '+14382812012',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 1002,
      userId: 1002,
      firstName: 'Robert',
      lastName: 'Halford',
      phone: '+13212324221',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 1003,
      userId: 1001,
      firstName: 'Ernesto',
      lastName: 'Rodriguez',
      phone: '+5215532845212',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 1004,
      userId: 1001,
      firstName: 'Juan',
      lastName: 'Velazquez',
      phone: '+5215539281021',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Contacts', null, {})
  }
};
