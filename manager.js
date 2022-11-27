"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var readlineSync = require("readline-sync");
var Manager = /** @class */ (function () {
    function Manager() {
        this.coffees = [];
    }
    Manager.prototype.add = function (sp) {
        this.coffees.push(sp);
    };
    Manager.prototype.showList = function () {
        return this.coffees;
    };
    Manager.prototype.edit = function (id) {
        for (var i = 0; i < this.coffees.length; i++) {
            if (this.coffees[i].getId() == id) {
                this.coffees[i].setId(readlineSync.question('Nhap id:'));
                this.coffees[i].setName(readlineSync.question('Nhap name:'));
                this.coffees[i].setPrice(readlineSync.question('Nhap price:'));
                this.coffees[i].setType(readlineSync.question('Nhap type:'));
                this.coffees[i].setDescribe(readlineSync.question('Nhap describe:'));
                this.coffees[i].setAmount(readlineSync.question('Nhap amount:'));
            }
            return this.coffees;
        }
    };
    Manager.prototype["delete"] = function (id) {
        var resigns = [];
        for (var i = 0; i < this.coffees.length; i++) {
            if (this.coffees[i].getId() == id) {
            }
            console.table(this.coffees[i]);
            resigns.push(this.coffees.splice(i, 1));
        }
    };
    Manager.prototype.searchByName = function (name) {
        //     let names = []
        //     for (let i = 0; i < this.coffees.length; i++) {
        //         if (this.coffees[i].getName() == name) {
        //             names.push(this.coffees[i])
        //         }
        //     }
        //     return names
        return this.coffees.filter(function (element) { return element.getName() == name; });
    };
    Manager.prototype.showByType = function (type) {
        var types = [];
        for (var i = 0; i < this.coffees.length; i++) {
            if (this.coffees[i].getType() == type) {
                types.push(this.coffees[i]);
            }
        }
        return types;
    };
    Manager.prototype.sortAsc = function () {
        console.table(this.coffees.sort(function (a, b) { return a.getPrice() - b.getPrice(); }));
    };
    Manager.prototype.deleteAllByType = function (type) {
        //     let tyess = []
        //     for (let i = 0; i < this.coffees.length; i++) {
        //         if ((this.coffees[i].getType() != type)) {
        //             tyess.push(this.coffees[i])
        //         }
        //     }
        //     return tyess
        return this.coffees.filter(function (element) { return element.getType() != type; });
    };
    return Manager;
}());
exports.Manager = Manager;
