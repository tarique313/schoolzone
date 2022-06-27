"use strict";
exports.__esModule = true;
exports.config = void 0;
var dotenv_1 = require("dotenv");
var result = dotenv_1["default"].config();
if (result === null || result === void 0 ? void 0 : result.error) {
    throw new Error('Add .env file');
}
exports.config = {
    env: process.env.SZ_ENV,
    appName: process.env.SZ_APP,
    port: process.env.SZ_POR,
    mongoUri: "mongodb+srv://".concat(process.env.SZ_MONGO_USER, ":").concat(process.env.SZ_MONGO_PASSWORD, "@").concat(process.env.SZ_MONGO_HOST, ".").concat(process.env.SZ_MONGO_REPLICA, "/").concat(process.env.SZ_MONGO_DB)
};
console.info('');
