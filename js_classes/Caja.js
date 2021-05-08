class Caja {
    constructor(ancho, alto, largo) {
        this.ancho = ancho;
        this.alto = alto;
        this.largo = largo;
    }

    getVolumen() {
        const result = this.ancho * this.alto * this.largo;
        return result;
    }

    getAreaSuperficie() {
        return (2 * this.ancho * this.alto) + (2 * this.alto * this.largo) + (2 * this.ancho * this.largo);
    }
}


const cajita = new Caja(10, 20, 30);
console.log(cajita)
console.log('Volumen', cajita.getVolumen())
console.log('Area', cajita.getAreaSuperficie())