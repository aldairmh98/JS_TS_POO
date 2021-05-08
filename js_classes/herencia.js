class Product {
    constructor(id, name, price, imageUrl = 'default.png') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

class ProductForCart extends Product {

    constructor(id, name, price, quantity, imageUrl = 'default.png') {
        super(id, name, price, imageUrl)
        this.quantity = quantity;
    }

    //COMPORTAMIENTO
    getTotal() {
        return this.quantity * this.price;
    }
}

module.exports = {
    ProductForCart
}