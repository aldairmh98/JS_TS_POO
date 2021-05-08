class Product {
    id = 0;
    name = '';
    price = '';
    imageUrl = '';
    constructor(id, name, price, imageUrl = 'default.png') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

class ProductForCart extends Product {
    quantity = 0;
    constructor(id, name, price, quantity, imageUrl = 'default.png') {
        super(id, name, price, imageUrl)
        this.quantity = quantity;
    }

    //COMPORTAMIENTO
    getTotal() {
        return this.quantity * this.price;
    }
}

const productForCart = new ProductForCart(1, 'Fabuloso', 25, 2);
//ORIGEN DEL JSON
console.log(productForCart)
console.log(productForCart.getTotal())

module.exports = {
    ProductForCart
}