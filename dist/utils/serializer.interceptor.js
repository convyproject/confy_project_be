"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const user_response_serializer_1 = require("../users/user-response.serializer");
const deep_map_object_1 = require("./deep-map-object");
let SerializerInterceptor = class SerializerInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            return (0, deep_map_object_1.default)(data, (value) => {
                if (value.__entity === 'User') {
                    (0, user_response_serializer_1.default)(value);
                }
                return value;
            });
        }));
    }
};
SerializerInterceptor = __decorate([
    (0, common_1.Injectable)()
], SerializerInterceptor);
exports.SerializerInterceptor = SerializerInterceptor;
//# sourceMappingURL=serializer.interceptor.js.map