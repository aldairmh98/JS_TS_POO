export interface IOwnDate {
    months: string[];
    toDateString(): void;
}

class OwnDate implements IOwnDate {
    private _day: number;
    private _month: number;
    private _year: number;
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
        this.months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL',
            'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE',
            'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
    }
    months: string[];
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

class OwnDateTime implements IOwnDate {
    private ownDate: OwnDate;
    private hour: number;
    private minutes: number;

    constructor(ownDate: OwnDate, hour, minutes) {
        this.ownDate = ownDate;
        this.hour = hour;
        this.minutes = minutes;
    }
    months: string[];

    toDateString() {
        let timeName = 'AM'
        let hour = this.hour;
        if (this.hour >= 12) {
            timeName = 'PM'
        }
        if (this.hour >= 13) {
            hour = this.hour - 12;
        }
        return this.ownDate.toDateString() + ` a las ${hour}:${this.minutes} ${timeName}`
    }

}

const date = new OwnDate(25, 2, 2021);

const ownDate = new OwnDateTime(date, 13, 50);

console.log(ownDate.toDateString());


