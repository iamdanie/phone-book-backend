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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.create = exports.findById = exports.findByUser = void 0;
const _index_1 = require("../dao/_index");
function findByUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const user = yield _index_1.UsersDao.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'Provided user doesn\'t exist', errorCode: 'USER_NOT_EXIST', status: 404 });
            }
            const contacts = yield _index_1.ContactsDao.findAll(userId);
            return res.status(200).json(contacts);
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.findByUser = findByUser;
function findById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { contactId } = req.params;
            const contact = yield _index_1.ContactsDao.findById(contactId);
            if (!contact) {
                return res.status(404).json({ error: 'Provided contact doesn\'t exist', errorCode: 'CONTACT_NOT_EXIST', status: 404 });
            }
            return res.status(200).json(contact);
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.findById = findById;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newContact = Object.assign(Object.assign({}, req.body), { userId: 1 });
            const createdContact = yield _index_1.ContactsDao.create(newContact);
            return res.status(202).json(createdContact);
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.create = create;
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { contactId } = req.params;
            yield _index_1.ContactsDao.remove(contactId);
            return res.status(204).json();
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.remove = remove;

//# sourceMappingURL=contacts.js.map
