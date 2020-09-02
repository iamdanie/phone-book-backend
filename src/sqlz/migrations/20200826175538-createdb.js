"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contacts", {
      id: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Contacts")
    await queryInterface.dropTable("Users")
  }
};
