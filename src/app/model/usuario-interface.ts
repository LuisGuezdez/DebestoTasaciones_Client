import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { ISucursal } from "./sucursal-interface";
import { ITipousuario } from "./usertype-response-interface";

export interface IUsuario {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    username: string;
    coches: number;
    tipousuario: ITipousuario;
    sucursal: ISucursal;
}

export interface IUsuario2Form {
    id:          FormControl<number>;
    nombre:      FormControl<string>;
    apellidos:   FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
    id_tipousuario:    FormControl<number>;
    id_sucursal: FormControl<number>;
}
export interface IUsuario2Send {
    id:          number | undefined;
    nombre:      string | undefined;
    apellidos:   string | undefined;
    email:       string | undefined;
    username:    string | undefined;
    tipousuario: IEntity;
    sucursal:    IEntity;
}



