"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.create = exports.findByEmail = exports.findById = void 0;
const user_1 = __importDefault(require("../sqlz/models/user"));
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield user_1.default.findByPk(id);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findById = findById;
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield user_1.default.findOne({
                where: { email },
                include: [user_1.default.associations.contacts]
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findByEmail = findByEmail;
function create(user, transaction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield user_1.default.create(user, { transaction });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.create = create;
function updatePassword(userId, password, transaction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield user_1.default.update({ password }, { where: { id: userId }, transaction });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.updatePassword = updatePassword;

//# sourceMappingURL=users.js.map
