export interface OficinaOsiptel {
    departamento: String,
    tipo: String,
    nombre: String,
    direccion?: String,
    telefono?: String,
    celular1?: String,
    celular2?: String,
    email?: String,
    horario?: String
    ubicacion_latitud?: String,
    ubicacion_longitud?: String
}

export interface CanalAtencionOsiptel {
    nombre: string,
    descripcion1?: String,
    descripcion2?: String,
    icono?: String
}
