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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = __importDefault(require("winston"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const routes = __importStar(require("./routes/_index"));
const { PORT } = require('../config/api.json');
class Server {
    constructor() {
        this.logger = winston_1.default.createLogger({
            level: 'info', format: winston_1.default.format.json(),
            transports: [
                new winston_1.default.transports.Console(),
                new winston_1.default.transports.File({ filename: 'logfile.log' })
            ]
        });
        this.app = express_1.default();
        this.app.use(cors_1.default({
            optionsSuccessStatus: 200,
        }));
        this.app.use(body_parser_1.urlencoded({
            extended: true,
        }));
        this.app.use(body_parser_1.json());
        this.app.use(morgan_1.default('dev'));
        this.app.listen(PORT, () => {
            this.logger.info(`--> Server successfully started at port ${PORT}`);
        });
        routes.initRoutes(this.app);
    }
    getApp() {
        return this.app;
    }
}
exports.default = new Server().app;

//# sourceMappingURL=server.js.map
