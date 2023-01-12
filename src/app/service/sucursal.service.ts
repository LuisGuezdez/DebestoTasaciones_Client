import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { ISucursal } from "../model/sucursal-interface";

@Injectable({
    providedIn: 'root'
  })
  
  export class SucursalService {
  
    private entityURL = '/sucursal';
    url: string = ""
  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }
  
    
  
    getOne(id: number): Observable<ISucursal> {
      return this.oHttp.get<ISucursal>(this.url + "/" + id);
    }

  }
  