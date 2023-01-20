import { Pageable, Sort } from "./shared-interface";

export interface ISucursal {
    id: number;
    nombre: string;
    localidad: string;
    calle: string;
    postal: number;
    usuarios: number;
    compras: number;
    tasaciones: number;
}

export interface SucursalResponse {
    content:          ISucursal[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    sort:             Sort;
    number:           number;
    first:            boolean;
    size:             number;
    empty:            boolean;
}