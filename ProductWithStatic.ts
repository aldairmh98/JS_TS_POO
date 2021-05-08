export class ProductWithStatic {
    private static _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        ProductWithStatic._name = name;
        this._price = price;
    }

    public static changeName(newName: string) {
        ProductWithStatic._name = newName;
    }

    public set setName(name: string) {
        ProductWithStatic._name = name;
    }

    public set setPrice(price: number){
        this._price = price;
    }

    public get getName(){
        return ProductWithStatic._name
    }

    public get getPrice(){
        return this._price;
    }

}
