"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = __importDefault(require("./_index"));
const contact_1 = __importDefault(require("./contact"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        type: sequelize_1.DataTypes.DOUBLE(),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(255)
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(255)
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(255)
    }
}, {
    tableName: 'Users', sequelize: _index_1.default
});
User.hasMany(contact_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'contacts'
});
exports.default = User;

//# sourceMappingURL=user.js.map
