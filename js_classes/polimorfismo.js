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

const products = [new ProductForCart(1, 'Fabuloso', 20, 10), new ProductForCart(1, 'Huevos', 25, 1)];

const cart = new Cart(products);

console.log(cart.getTotal())


class CartWithCCPayment extends Cart {
    //10 pesos de comisión
    static appFee = 10;

    //POLIMORFISMO POR SUBTIPADO
    getTotal() {
        return super.getTotal() + 10;
    }
}

const cartWithCCPayment = new CartWithCCPayment(products)

console.log(cartWithCCPayment.getTotal());

