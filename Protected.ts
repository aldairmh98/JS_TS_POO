class Product {
    private id: number;
    private name: string;
    protected price: number;
    private imageUrl: string;
    constructor(id, name, price, imageUrl = 'default.png') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }


    public get Price(): number {
        return this.price;
    }

}

class ProductForCart {

    private quantity: number;
    private product: Product;

    constructor(product: Product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    //COMPORTAMIENTO
    getTotal() {
        return this.quantity * this.product.Price;
    }
}

const product = new Product(1, 'Pooli', 20)

const productForCart = new ProductForCart(product, 20);

console.log(productForCart.getTotal())