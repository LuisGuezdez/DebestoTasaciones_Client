import { FormControl } from "@angular/forms";
import { ICoche } from "./coche-interface";
import { IEntity } from "./generic-types-interface";
import { Pageable, Sort } from "./shared-interface";
import { ISucursal } from "./sucursal-interface";
import { IUsuario } from "./usuario-interface";


export interface ICompra {
    id: number;
    fecha: Date;
    precio: number;
    usuario: IUsuario;
    coche: ICoche;
    sucursal: ISucursal;
}

export interface CompraResponse {
    content:          ICompra[];
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

export interface ICompra2Form {
    id:          FormControl<number>;
    precio:   FormControl<number>;
    id_coche:    FormControl<number>;
    id_sucursal:       FormControl<number>;
    id_usuario: FormControl<number>;
}
export interface ICompra2Send {
    id: number;
    precio: number;
    coche: IEntity;
    sucursal: IEntity;
    usuario: IEntity;
}