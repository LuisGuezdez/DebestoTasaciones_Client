import { FormControl } from "@angular/forms";
import { Pageable, Sort } from "./shared-interface";
import { ICoche } from "./coche-interface";
import { IEntity } from "./generic-types-interface";
import { ISucursal } from "./sucursal-interface";
import { IUsuario } from "./usuario-interface";

export interface ITasacion {
    id: number;
    reserva: Date;
    valorcoche: number;
    usuario: IUsuario;
    coche: ICoche;
    sucursal: ISucursal;
}

export interface TasacionResponse {
    content:          ITasacion[];
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

export interface ITasacion2Form {
    id:          FormControl<number>;
    reserva:     FormControl<Date>;
    valorcoche:  FormControl<number>;
    id_coche:    FormControl<number>;
    id_sucursal: FormControl<number>;
    id_usuario:  FormControl<number>;
}

export interface ITasacion2Send {
    id: number;
    reserva: Date;
    valorcoche: number;
    coche: IEntity;
    sucursal: IEntity;
    usuario: IEntity;
}