"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require('../config/config.json');
const dbConfig = config[process.env.NODE_ENV];
const db = new sequelize_1.Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], dbConfig);
exports.default = db;

//# sourceMappingURL=_index.js.map
