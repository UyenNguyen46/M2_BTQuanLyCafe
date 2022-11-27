"use strict";
exports.__esModule = true;
exports.Coffee = void 0;
var Coffee = /** @class */ (function () {
    function Coffee(id, name, price, type, describe, amount) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._type = type;
        this._describe = describe;
        this._amount = amount;
    }
    Coffee.prototype.getId = function () {
        return this._id;
    };
    Coffee.prototype.setId = function (value) {
        this._id = value;
    };
    Coffee.prototype.getName = function () {
        return this._name;
    };
    Coffee.prototype.setName = function (value) {
        this._name = value;
    };
    Coffee.prototype.getPrice = function () {
        return this._price;
    };
    Coffee.prototype.setPrice = function (value) {
        this._price = value;
    };
    Coffee.prototype.getType = function () {
        return this._type;
    };
    Coffee.prototype.setType = function (value) {
        this._type = value;
    };
    Coffee.prototype.getDescribe = function () {
        return this._describe;
    };
    Coffee.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    Coffee.prototype.getAmount = function () {
        return this._amount;
    };
    Coffee.prototype.setAmount = function (value) {
        this._amount = value;
    };
    return Coffee;
}());
exports.Coffee = Coffee;
