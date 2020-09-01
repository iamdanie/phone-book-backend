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
exports.resetPassword = exports.register = exports.authenticate = void 0;
const _index_1 = require("../dao/_index");
function authenticate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (userCredentialsAreValid(email, password)) {
                return res.status(200).json({ token: 'FOO' });
            }
            return res.status(403).json({ error: 'You have provided a wrong username/password', errorCode: 'INVALID_LOGIN', status: 403 });
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.authenticate = authenticate;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userDb = yield _index_1.UsersDao.create(req.body);
            const user = userDb.toJSON();
            delete user.password;
            return res.status(202).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.register = register;
function resetPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const { email, currentPassword, newPassword } = req.body;
            if (yield userCredentialsAreValid(email, currentPassword, userId)) {
                yield _index_1.UsersDao.updatePassword(userId, newPassword);
                return res.status(200).json({
                    status: 200,
                    message: `User password has been updated successfully`,
                    code: 'PASSWORD_RESET_SUCCESS'
                });
            }
            return res.status(403).json({ error: 'Your current password is wrong', errorCode: 'WRONG_CURRENT_PASSWORD', status: 403 });
        }
        catch (error) {
            return res.status(500).json({ error: error.response || error });
        }
    });
}
exports.resetPassword = resetPassword;
function userCredentialsAreValid(email, password, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userDb = userId ? yield _index_1.UsersDao.findById(userId) : yield _index_1.UsersDao.findByEmail(email);
        const user = yield userDb.toJSON();
        return user && password === user.password;
    });
}

//# sourceMappingURL=users.js.map
