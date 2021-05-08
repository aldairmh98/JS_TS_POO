const { ProductForCart } = require('./herencia');

class Cart {
    /**
     * 
     * @param {ProductForCart[]} productsForCart
     */
    constructor(productsForCart = []) {
        this._productsCart = productsForCart;
    }

    //calcula el total
    getTotal() {
        return this._productsCart.reduce((accumulator, object) => {
            return accumulator + object.getTotal()
        }, 0)
    }
}

const cart = new Cart([new ProductForCart(1, 'Fabuloso', 20, 10), new ProductForCart(1, 'Huevos', 25, 1)]);

console.log(cart.getTotal())


class CartWithCCPayment {

}


class CartWithCashPayment {

}

