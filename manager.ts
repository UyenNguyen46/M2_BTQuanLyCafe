import {Coffee} from "./coffee";
import * as readlineSync from "readline-sync";

export class Manager {
    coffees: Coffee[] = []

    add(sp: Coffee) {
        this.coffees.push(sp)
    }

    showList() {
        return this.coffees;
    }

    edit(id) {
        for (let i = 0; i < this.coffees.length; i++) {
            if (this.coffees[i].getId() == id) {
                this.coffees[i].setId(readlineSync.question('Nhap id:'))
                this.coffees[i].setName(readlineSync.question('Nhap name:'))
                this.coffees[i].setPrice(readlineSync.question('Nhap price:'))
                this.coffees[i].setType(readlineSync.question('Nhap type:'))
                this.coffees[i].setDescribe(readlineSync.question('Nhap describe:'))
                this.coffees[i].setAmount(readlineSync.question('Nhap amount:'))
            }
            return this.coffees
        }
    }

    delete(id) {
        let resigns = [];
        for (let i = 0; i < this.coffees.length; i++) {
            if (this.coffees[i].getId() == id) {
            }
            console.table(this.coffees[i])
            resigns.push(this.coffees.splice(i, 1))
        }
    }

    searchByName(name) {
        //     let names = []
        //     for (let i = 0; i < this.coffees.length; i++) {
        //         if (this.coffees[i].getName() == name) {
        //             names.push(this.coffees[i])
        //         }
        //     }
        //     return names
        return this.coffees.filter(element => element.getName() == name);
    }

    showByType(type) {
        let types = []
        for (let i = 0; i < this.coffees.length; i++) {
            if (this.coffees[i].getType() == type) {
                types.push(this.coffees[i])
            }
        }
        return types;
    }

    sortAsc() {
        console.table(this.coffees.sort((a: Coffee, b: Coffee) => a.getPrice() - b.getPrice()))

    }

    deleteAllByType(type: string) {
        //     let tyess = []
        //     for (let i = 0; i < this.coffees.length; i++) {
        //         if ((this.coffees[i].getType() != type)) {
        //             tyess.push(this.coffees[i])
        //         }
        //     }
        //     return tyess
        return this.coffees.filter(element => element.getType() != type)
    }


}
