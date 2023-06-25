"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var Validate = /** @class */ (function (_super) {
    __extends(Validate, _super);
    function Validate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Validate.prototype.flattenValidationErrors = function (validationErrors) {
        var first = validationErrors[0].constraints;
        var msg = Object.values(first)[0];
        console.log(validationErrors);
        // validationErrors.forEach((error) => {
        //     // messages[error.property] = Object.values(error.constraints)[0]
        // })
        throw new common_1.HttpException({
            code: 400,
            messages: msg
        }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    };
    return Validate;
}(common_1.ValidationPipe));
exports.default = Validate;
