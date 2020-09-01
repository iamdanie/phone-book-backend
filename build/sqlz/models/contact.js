"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = __importDefault(require("./_index"));
class Contact extends sequelize_1.Model {
}
Contact.init({
    id: {
        allowNull: false,
        type: new sequelize_1.DataTypes.DOUBLE(),
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        allowNull: false,
        type: new sequelize_1.DataTypes.DOUBLE()
    },
    firstName: {
        allowNull: false,
        type: new sequelize_1.DataTypes.STRING(255)
    },
    lastName: {
        allowNull: false,
        type: new sequelize_1.DataTypes.STRING(255)
    },
    phone: {
        allowNull: false,
        type: new sequelize_1.DataTypes.STRING(255)
    }
}, {
    tableName: 'Contacts', sequelize: _index_1.default
});
exports.default = Contact;

//# sourceMappingURL=contact.js.map
