"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('apple', () => ({
    appAudience: JSON.parse(process.env.APPLE_APP_AUDIENCE),
}));
//# sourceMappingURL=apple.config.js.map