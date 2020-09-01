"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const _index_1 = require("../endpoints/_index");
function routes(app, API_VERSION) {
    app.post(`${API_VERSION}/user/authenticate`, _index_1.UserController.authenticate);
    app.post(`${API_VERSION}/user`, _index_1.UserController.register);
    app.put(`${API_VERSION}/user/:userId`, _index_1.UserController.resetPassword);
}
exports.routes = routes;

//# sourceMappingURL=users.js.map
