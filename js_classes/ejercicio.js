//1.- MODELA Y escribe una clase llamada "OwnDate", que reciba parametros de día mes y año en formato numérico 
//y se devuelva en string fecha como
//1 de Febrero del 2019

class OwnDateSetGetJS {
    months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL',
        'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']

    set day(_day) {
        this._day = _day;
    }

    set month(_month) {
        this._month = _month;
    }

    set year(_year) {
        this._year = _year;
    }

    constructor() { }

    toDateString() {
        return `${this._day} de ${this._monthToString()} del ${this._year}`
    }

    _monthToString() {
        if (this._month > 12 && this._month < 0) {
            return 'MES NO VÁLIDO';
        }
        return this.months[(this._month - 1)]
    }
}


class OwnDateSetGet {
    months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL',
        'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']

    setDay(day) {
        this._day = day;
    }

    setMonth(month) {
        this._month = month;
    }

    setYear(year) {
        this._year = year;
    }

    constructor() { }

    toDateString() {
        return `${this._day} de ${this._monthToString()} del ${this._year}`
    }

    _monthToString() {
        if (this._month > 12 && this._month < 0) {
            return 'MES NO VÁLIDO';
        }
        return this.months[(this._month - 1)]
    }
}

class OwnDate {
    months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL',
        'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE',
        'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }
    toDateString() {
        return `${this._day} de ${this._monthToString()} del ${this._year}`
    }
    _monthToString() {
        if (this._month > 12 && this._month < 0) {
            return 'MES NO VÁLIDO';
        }
        return this.months[(this._month - 1)]
    }
}

const date = new OwnDate(25, 2, 2021);
const result = date.toDateString()
console.log(result)


//2.- Utiliza Herencia para extender las operaciones de "OwnDate" y crear una nueva clase "OwnTimeDate" que ahora reciba la hora y los minutos 
//(en formato de 24 horas ) y devuelva 1 de Febrero del 2019 a las 11:00 P.M. horas (con el formato de 12 hrs "PM o AM" )


class OwnDateTime extends OwnDate {
    constructor(day, month, year, hour, minutes) {
        super(day, month, year);
        this.hour = hour;
        this.minutes = minutes;
    }

    toDateString() {
        let timeName = 'AM'
        let hour = this.hour;
        if (this.hour >= 12) {
            timeName = 'PM'
        }
        if (this.hour >= 13) {
            hour = this.hour - 12;
        }
        return super.toDateString() + ` a las ${hour}:${this.minutes} ${timeName}`
    }
}


const ownDate = new OwnDateTime(10, 10, 2021, 13, 50);

console.log(ownDate.toDateString());


