import {Coffee} from "./coffee";
import {Manager} from "./manager";
import * as readlineSync from "readline-sync";

let manager = new Manager()
manager.add(new Coffee(1, "caffe sua", 30, "Coffee", "caffe sua theo phan tram", 300));
manager.add(new Coffee(2, "tra sua", 35, "Tra", "tra sua tran chan trau", 305));
manager.add(new Coffee(3, "nuoc ep tao", 15, "Nuoc ep", "nuoc ep tao mi", 306));
manager.add(new Coffee(4, "bim bim", 6, "Do an vat", "bim bim khoai tay", 1300));
manager.add(new Coffee(5, "caffe den", 30, "Coffee", "caffe den nguyen chat", 400));
manager.add(new Coffee(6, "tra sua thai", 35, "Tra", "tra sua thai xanh", 400));
manager.add(new Coffee(7, "nuoc ep cam", 15, "Nuoc ep", "nuoc ep cam xa", 500));
manager.add(new Coffee(8, "banh", 10, "Do an vat", "banh bong lan", 500));
manager.add(new Coffee(9, "binhchilinh", 15, "Do an vat", "kem tran chau", 1200));
manager.add(new Coffee(10, "nuoc ep dau", 15, "Nuoc ep", "nuoc ep dau da lat", 11300));
let types = ['Coffee', 'Tra', 'Nuoc ep', 'Do an vat']

export function menu() {
    console.log('1:Hien danh sach mon an:');
    console.log('2:Them mon an:');
    console.log('3:Sua mon an:');
    console.log('4:Xoa mon an:');
    console.log('5:Tim mon an theo ten:');
    console.log('6:Hien thi mon an theo ten:');
    console.log('7:Sap xep mon an theo gia tang dan:');
    console.log('8:Xoa het cac mon an cung loai:');
}

let isExist = false;

while (!isExist) {
    menu();
    let number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(manager.showList());
            break;
        case "2":
            let id = +readlineSync.question('Nhap id: ');
            let name = readlineSync.question('Nhap name: ');
            let price = +readlineSync.question('Nhap price: ');
            let typeIndex = readlineSync.question('Chon type: \n1. Coffee \n2. Tra \n3. Nuoc Ep \n4. Do an vat');
            let type = types[typeIndex - 1];
            let describe = readlineSync.question('Nhap describe: ');
            let amount = +readlineSync.question('Nhap amount: ');
            let coffe = new Coffee(id, name, price, type, describe, amount)
            manager.add(coffe)
            console.table(manager.showList());
            break;
        case "3":
            let id1: number = +readlineSync.question('Nhap id1 muon sua:');
            console.table(manager.edit(id1))
            break;
        case "4":
            manager.delete(readlineSync.question("Nhap ten can xoa: "));
            console.table(manager.showList())
            break;
        case "5":
            console.table(manager.searchByName(readlineSync.question("nhap ten can tim: ")));
            break;
        case "6":
            let typeIndex1 = readlineSync.question('Chon type: \n1. Coffee \n2. Tra \n3. Nuoc Ep \n4. Do an vat');
            let type1 = types[typeIndex1 - 1];
            console.table(manager.showByType(type1));
            break;
        case "7":
            manager.sortAsc()
            break;
        case "8":
            let typeIndex2 = readlineSync.question('Chon type: \n1. Coffee \n2. Tra \n3. Nuoc Ep \n4. Do an vat\n');
            let type2 = types[typeIndex2 - 1];
            console.table(manager.deleteAllByType(type2))


    }

}
