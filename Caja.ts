class CajaTS {
    private _ancho: number;
    private _alto: number;
    private _largo: number;

    constructor(ancho: number, alto: number, largo: number) {
        this._ancho = ancho;
        this._alto = alto;
        this._largo = largo;
    }

    public getVolumen(): number {
        const result = this._ancho * this._alto * this._largo;
        return result;
    }

    public getAreaSuperficie(): number {
        return (2 * this._ancho * this._alto) + (2 * this._alto * this._largo) + (2 * this._ancho * this._largo);
    }
}

const cajita2 = new CajaTS(10, 10, 30);
