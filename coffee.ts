export class Coffee {
    private _id: number;
    private _name: string;
    private _price: number;
    private _type: string;
    private _describe: string; //mô tả
    private _amount: number //số lượng

    constructor(id: number, name: string, price: number, type: string, describe: string, amount: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._type = type;
        this._describe = describe;
        this._amount = amount;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }

    getType(): string {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
    }

    getDescribe(): string {
        return this._describe;
    }

    setDescribe(value: string) {
        this._describe = value;
    }

    getAmount(): number {
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
    }
}