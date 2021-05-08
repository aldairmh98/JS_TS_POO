class HolaMundo {
    constructor() {
        console.log('Función ejecutada desde el constructor')
    }

    saludar() {
        console.log('Hello')
    }
}

const hola = new HolaMundo();

hola.saludar();

class HolaMundo2 {
    constructor(saludo) {
        this.saludo = saludo;
    }

    saludar() {
        console.log(this.saludo);
    }

    //SET, GET

    getSaludo() {
        return this.saludo;
    }

    setSaludo(saludo) {
        this.saludo = saludo;
    }
}

const hola2 = new HolaMundo2('Qué tal');
hola2.saludar();
hola2.setSaludo('Hola')
hola2.saludar();