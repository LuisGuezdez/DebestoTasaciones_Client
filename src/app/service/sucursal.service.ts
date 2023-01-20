import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { ISucursal, SucursalResponse } from "../model/sucursal-interface";

@Injectable({
    providedIn: 'root'
  })
  
  export class SucursalService {
  
    private entityURL = '/sucursal';
    url: string = ""
  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }
  
    getSucursalsPlist(page: number, size: number, termino: string): Observable<IPage<ISucursal>> {
      let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);
  
      let url: string = `${baseURL}${this.entityURL}`;
      return this.oHttp.get<IPage<ISucursal>>(this.url, { params: params });
    }
  
  
    getOne(id: number): Observable<ISucursal> {
      return this.oHttp.get<ISucursal>(this.url + "/" + id);
    }

  }
  