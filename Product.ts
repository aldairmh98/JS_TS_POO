class Product {
    private _name: string;
    private _price: number;
    //CONSTRUCTOR: Se ejecuta al crear una instancia/objeto
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get Price() {
        return this._price;
    }

    get Name() {
        return this._name;
    }
}


export {Product}