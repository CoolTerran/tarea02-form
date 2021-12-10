export class Persona {
    id: number;
    nombre: string;
    fecha: string;
    dni: number;
    tipodoc: string;
    motivo: string;

    constructor() {
        this.id = 0;
        this.nombre = null!;
        this.fecha = '';
        this.dni = null!;
        this.tipodoc = '';
        this.motivo = null!;
    }
}
