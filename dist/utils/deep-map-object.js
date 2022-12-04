"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepMapObject = (data, callback) => {
    const map = (value, key) => {
        if (value !== undefined && value !== null && typeof value === 'object') {
            callback(value, key);
        }
        if (value === undefined || value === null) {
        }
        else if (value.constructor === Object) {
            for (const k in value) {
                map(value[k], k);
            }
        }
        else if (value.constructor === Array) {
            for (let i = 0; i < value.length; i++) {
                map(value[i], i);
            }
        }
    };
    map(data, undefined);
    return data;
};
exports.default = deepMapObject;
//# sourceMappingURL=deep-map-object.js.map