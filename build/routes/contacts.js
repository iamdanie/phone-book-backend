"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const _index_1 = require("../endpoints/_index");
function routes(app, API_VERSION) {
    app.get(`${API_VERSION}/contacts/:userId`, _index_1.ContactController.findByUser);
    app.get(`${API_VERSION}/contact/:contactId`, _index_1.ContactController.findById);
    app.post(`${API_VERSION}/contact`, _index_1.ContactController.create);
    app.delete(`${API_VERSION}/contact/:contactId`, _index_1.ContactController.remove);
}
exports.routes = routes;

//# sourceMappingURL=contacts.js.map
