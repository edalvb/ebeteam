export interface Denuncia {
    fecha: string;
    denuncia: string;
    operadora: string;
    recurso: string;
    servicio: string;
    materia: string;
    estado: string;
  }

export interface EmpresaOperadora {
    id: String;
    nombre: String;
}

export interface Servicio {
    id: String;
    nombre: String;
}

export interface Recurso {
    id: String;
    nombre: String;
}

export interface Materia {
    id: String;
    nombre: String;
}

export interface OficinaEo {
    distrito: String,
    direccion?: String,
    horario?: String
    ubicacion_latitud?: String,
    ubicacion_longitud?: String
}

