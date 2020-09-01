"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const UsersRoutes = __importStar(require("./users"));
const ContactsRoutes = __importStar(require("./contacts"));
function initRoutes(app) {
    const { VERSION } = require('../../config/api.json');
    app.get(`${VERSION}/healthcheck`, (req, res) => res.status(200).json({
        message: 'Welcome to the Phone Book Api!',
        date: Date.now()
    }));
    UsersRoutes.routes(app, VERSION);
    ContactsRoutes.routes(app, VERSION);
    app.all('*', (req, res) => res.status(404).json({
        error: 'Resource not found',
    }));
}
exports.initRoutes = initRoutes;

//# sourceMappingURL=_index.js.map
