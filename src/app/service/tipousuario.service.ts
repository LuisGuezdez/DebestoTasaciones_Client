import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { ITipousuario } from "../model/usertype-response-interface";



@Injectable({
    providedIn: 'root'
  })
  
  export class TipousuarioService {
  
    private entityURL = '/tipousuario';
    url: string = ""
  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }
  
    getTipousuarioPlist(page: number, size: number, termino: string): Observable<IPage<ITipousuario>> {
      let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);
  
      let url: string = `${baseURL}${this.entityURL}`;
      return this.oHttp.get<IPage<ITipousuario>>(this.url, { params: params });
    }
  
  
    getOne(id: number): Observable<ITipousuario> {
      return this.oHttp.get<ITipousuario>(this.url + "/" + id);
    }

  }