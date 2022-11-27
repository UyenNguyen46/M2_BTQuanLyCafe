"use strict";
exports.__esModule = true;
exports.menu = void 0;
var coffee_1 = require("./coffee");
var manager_1 = require("./manager");
var readlineSync = require("readline-sync");
var manager = new manager_1.Manager();
manager.add(new coffee_1.Coffee(1, "caffe sua", 30, "Coffee", "caffe sua theo phan tram", 300));
manager.add(new coffee_1.Coffee(2, "tra sua", 35, "Tra", "tra sua tran chan trau", 305));
manager.add(new coffee_1.Coffee(3, "nuoc ep tao", 15, "Nuoc ep", "nuoc ep tao mi", 306));
manager.add(new coffee_1.Coffee(4, "bim bim", 6, "Do an vat", "bim bim khoai tay", 1300));
manager.add(new coffee_1.Coffee(5, "caffe den", 30, "Coffee", "caffe den nguyen chat", 400));
manager.add(new coffee_1.Coffee(6, "tra sua thai", 35, "Tra", "tra sua thai xanh", 400));
manager.add(new coffee_1.Coffee(7, "nuoc ep cam", 15, "Nuoc ep", "nuoc ep cam xa", 500));
manager.add(new coffee_1.Coffee(8, "banh", 10, "Do an vat", "banh bong lan", 500));
manager.add(new coffee_1.Coffee(9, "binhchilinh", 15, "Do an vat", "kem tran chau", 1200));
manager.add(new coffee_1.Coffee(10, "nuoc ep dau", 15, "Nuoc ep", "nuoc ep dau da lat", 11300));
var types = ['Coffee', 'Tra', 'Nuoc ep', 'Do an vat'];
function menu() {
    console.log('1:Hien danh sach mon an:');
    console.log('2:Them mon an:');
    console.log('3:Sua mon an:');
    console.log('4:Xoa mon an:');
    console.log('5:Tim mon an theo ten:');
    console.log('6:Hien thi mon an theo ten:');
    console.log('7:Sap xep mon an theo gia tang dan:');
    console.log('8:Xoa het cac mon an cung loai:');
}
exports.menu = menu;
var isExist = false;
while (!isExist) {
    menu();
    var number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(manager.showList());
            break;
        case "2":
            var id = +readlineSync.question('Nhap id: ');
            var name_1 = readlineSync.question('Nhap name: ');
            var price = +readlineSync.question('Nhap price: ');
            var typeIndex = readlineSync.question('Chon type: \n1. Coffee \n2. Tra \n3. Nuoc Ep \n4. Do an vat');
            var type = types[typeIndex - 1];
            var describe = readlineSync.question('Nhap describe: ');
            var amount = +readlineSync.question('Nhap amount: ');
            var coffe = new coffee_1.Coffee(id, name_1, price, type, describe, amount);
            manager.add(coffe);
            console.table(manager.showList());
            break;
        case "3":
            var id1 = +readlineSync.question('Nhap id1 muon sua:');
            console.table(manager.edit(id1));
            break;
        case "4":
            manager["delete"](readlineSync.question("Nhap ten can xoa: "));
            console.table(manager.showList());
            break;
        case "5":
            console.table(manager.searchByName(readlineSync.question("nhap ten can tim: ")));
            break;
        case "6":
            var typeIndex1 = readlineSync.question('Chon type: \n1. Coffee \n2. Tra \n3. Nuoc Ep \n4. Do an vat');
            var type1 = types[typeIndex1 - 1];
            console.table(manager.showByType(type1));
            break;
        case "7":
            manager.sortAsc();
            break;
        case "8":
            var typeIndex2 = readlineSync.question('Chon type: \n1. Coffee \n2. Tra \n3. Nuoc Ep \n4. Do an vat\n');
            var type2 = types[typeIndex2 - 1];
            console.table(manager.deleteAllByType(type2));
    }
}
