import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { Pageable, Sort } from "./shared-interface";
import { IUsuario } from "./usuario-interface";

export interface ICoche {
    id: number;
    marca: string;
    modelo: string;
    anyo: Date;
    kms: number;
    combustible: string;
    tasaciones: number;
    usuario: IUsuario;
}

export interface CocheResponse {
    content:          ICoche[];
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

export interface ICoche2Form {
    id:          FormControl<number>;
    marca:      FormControl<string>;
    modelo:   FormControl<string>;
    anyo:       FormControl<Date>;
    kms:    FormControl<number>;
    combustible:       FormControl<string>;
    id_usuario: FormControl<number>;
}
export interface ICoche2Send {
    id: number;
    marca: string;
    modelo: string;
    anyo: Date;
    kms: number;
    combustible: string;
    usuario: IEntity;
}