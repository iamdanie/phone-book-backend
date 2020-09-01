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
exports.remove = exports.create = exports.findById = exports.findAll = void 0;
const contact_1 = __importDefault(require("../sqlz/models/contact"));
function findAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield contact_1.default.findAll({ where: { userId }, order: [['firstName', 'desc'], ['lastName', 'desc']] });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findAll = findAll;
function findById(contactId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield contact_1.default.findByPk(contactId);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findById = findById;
function create(contact, transaction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield contact_1.default.create(contact, { transaction });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.create = create;
function remove(contactId, transaction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield contact_1.default.destroy({ where: { id: contactId }, transaction });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.remove = remove;

//# sourceMappingURL=contacts.js.map
