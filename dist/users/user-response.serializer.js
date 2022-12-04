"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userResponseSerializer = (user) => {
    delete user.password;
    delete user.hash;
    delete user.previousPassword;
};
exports.default = userResponseSerializer;
//# sourceMappingURL=user-response.serializer.js.map