import { Pageable, Sort } from "./shared-interface";

export interface UsertypeResponse {
    content:          ITipousuario[];
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

export interface ITipousuario {
    id:         number;
    tipo:       string;
    usuarios:   number;
}

