class Calculadora {
    //ATRIBUTOS PUBLICOS
    color = '';
    _number;
    //ATRIBUTOS ESTATICOS
    static numberOfInstances = 0;
    constructor(number, number2, operation = 'SUM') {
        //ATRIBUTOS PRIVADOS
        this._number = number
        this._number2 = number2
        this._operation = operation
        //USO DE ATRIBUTO ESTATICO
        Calculadora.numberOfInstances = Calculadora.numberOfInstances + 1;
    }
    //MÉTODOS GETTER Y SETTER: PROPIEDAD
    get number() {
        return this._number;
    }

    set number(newNumber){
        return this._number = newNumber;
    }
    //PROPIEDAD

    //MÉtodo estatico, No puede acceder a variables "normales" sólo las estáticas
    static getNumberOfInstances() {
        return Calculadora.numberOfInstances;
    }

    //Comportamiento
    doOperation() {
        if (this._operation === 'SUM') {
            return this._number + this._number2;
        }
    }
}

//Creación de un objeto
const calculadora = new Calculadora(5, 2, 'SUM');
//Pure JS es sobre complicado manejar privado/publico (es virtual)
console.log(calculadora._number);
//Llamada de método a través del objeto
console.log(calculadora.doOperation())

//Acceso a método es sólo a través de la clase
console.log(Calculadora.getNumberOfInstances())

//Puedo acceder al atributo desde la clase
Calculadora.numberOfInstances = 4;

const calculadora2 = new Calculadora(3, 2, 'SUM');

console.log(Calculadora.getNumberOfInstances())