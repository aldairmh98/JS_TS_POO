//IMPORT
import { ProductWithStatic } from './ProductWithStatic';

const product = new ProductWithStatic("Tequila", 20);

const product2 = new ProductWithStatic('Ron', 30);

product.setName = 'Vodka';

console.log(product.getName, product2.getName);

ProductWithStatic.changeName('Whisky')
console.log(product.getName, product2.getName);