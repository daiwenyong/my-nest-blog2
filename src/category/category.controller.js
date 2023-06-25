"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
var common_1 = require("@nestjs/common");
var CategoryController = exports.CategoryController = function () {
    var _classDecorators = [(0, common_1.Controller)('category')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _created_decorators;
    var _getCategory_decorators;
    var _getDetail_decorators;
    var _delete_decorators;
    var CategoryController = _classThis = /** @class */ (function () {
        function CategoryController_1(categoryService) {
            this.categoryService = (__runInitializers(this, _instanceExtraInitializers), categoryService);
        }
        CategoryController_1.prototype.created = function (createCategoryDto) {
            return this.categoryService.created(createCategoryDto);
        };
        CategoryController_1.prototype.getCategory = function () {
            return this.categoryService.getList();
        };
        CategoryController_1.prototype.getDetail = function (id) {
            return this.categoryService.getDetail(+id);
        };
        CategoryController_1.prototype.delete = function (id) {
            return this.categoryService.delete(+id);
        };
        return CategoryController_1;
    }());
    __setFunctionName(_classThis, "CategoryController");
    (function () {
        _created_decorators = [(0, common_1.Post)()];
        _getCategory_decorators = [(0, common_1.Get)()];
        _getDetail_decorators = [(0, common_1.Get)(':id')];
        _delete_decorators = [(0, common_1.Delete)(':id')];
        __esDecorate(_classThis, null, _created_decorators, { kind: "method", name: "created", static: false, private: false, access: { has: function (obj) { return "created" in obj; }, get: function (obj) { return obj.created; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCategory_decorators, { kind: "method", name: "getCategory", static: false, private: false, access: { has: function (obj) { return "getCategory" in obj; }, get: function (obj) { return obj.getCategory; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDetail_decorators, { kind: "method", name: "getDetail", static: false, private: false, access: { has: function (obj) { return "getDetail" in obj; }, get: function (obj) { return obj.getDetail; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _delete_decorators, { kind: "method", name: "delete", static: false, private: false, access: { has: function (obj) { return "delete" in obj; }, get: function (obj) { return obj.delete; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        CategoryController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CategoryController = _classThis;
}();
