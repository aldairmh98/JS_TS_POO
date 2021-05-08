class Pregunta {
    constructor(pregunta: string, opciones: string[], puntaje: number) {
        this._pregunta = pregunta;
        this._opciones = opciones;
        this._puntaje = puntaje;

    }
    private _pregunta: string;
    private _opciones: string[];
    private _puntaje: number;

    get pregunta() {
        return this._pregunta;
    }

    get opciones() {
        return this._opciones;
    }

    get puntaje() {
        return this._puntaje;
    }

}

class Respuesta {
    constructor(pregunta: Pregunta) {
        this._pregunta = pregunta;
    }
    private _pregunta: Pregunta;

    public get pregunta() {
        return this._pregunta;
    }

    public esCorrecto(): boolean {
        return false;
    }

}

class PreguntaRespuesta extends Respuesta {
    constructor(pregunta: Pregunta, opcionCorrecta: number, respuestaUsuario: number) {
        super(pregunta);
        this._opcionCorrecta = opcionCorrecta;
        this._respuestaUsuario = respuestaUsuario;
    }

    private _opcionCorrecta: number;
    private _respuestaUsuario: number;

    public esCorrecto(): boolean {
        return this._opcionCorrecta === this._respuestaUsuario;
    }
}

class RespuestaMultiple extends Respuesta {
    constructor(pregunta: Pregunta, opcionesCorrectas: number[], respuestasUsuario: number[]) {
        super(pregunta);
        this._opcionesCorrectas = opcionesCorrectas;
        this._respuestasUsuario = respuestasUsuario;
    }

    private _opcionesCorrectas: number[];
    private _respuestasUsuario: number[];

    public esCorrecto(): boolean {
        if (this._opcionesCorrectas.length !== this._respuestasUsuario.length) {
            return false;
        }
        return this._opcionesCorrectas.filter(opcion => {
            return this._respuestasUsuario.indexOf(opcion) > -1;
        }).length === this._opcionesCorrectas.length;
    }
}

class Trivia {

    private respuestas: Respuesta[];

    constructor(respuestas: Respuesta[]) {
        this.respuestas = respuestas;
    }

    public puntuacionFinal(): number {
        let puntuacion = 0;
        for (let respuesta of this.respuestas) {
            if (respuesta.esCorrecto()) {
                puntuacion += respuesta.pregunta.puntaje;
            }
        }
        return puntuacion;
    }

    public esGanador(): boolean {
        return this.puntuacionFinal() > 25;
    }
}

function main() {
    const preguntas = [];
    preguntas.push(new Pregunta('Pregunta 1', ['1', '2', '3', '4'], 10));
    preguntas.push(new Pregunta('Pregunta 2', ['1', '2', '3', '4'], 10));
    preguntas.push(new Pregunta('Pregunta 3', ['1', '2', '3', '4'], 10));
    preguntas.push(new Pregunta('Pregunta 4', ['1', '2', '3', '4'], 10));
    preguntas.push(new Pregunta('Pregunta 5', ['1', '2', '3', '4'], 10));

    const preguntasConRespuestas: Respuesta[] = [];

    preguntasConRespuestas.push(new PreguntaRespuesta(preguntas[0], 1, 2));
    preguntasConRespuestas.push(new PreguntaRespuesta(preguntas[1], 1, 1));
    preguntasConRespuestas.push(new PreguntaRespuesta(preguntas[2], 1, 1));
    preguntasConRespuestas.push(new RespuestaMultiple(preguntas[3], [0, 3], [0, 3]));
    preguntasConRespuestas.push(new RespuestaMultiple(preguntas[4], [0, 1], [0]));

    console.log(new Trivia(preguntasConRespuestas).puntuacionFinal());
}

main()