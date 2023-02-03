import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { ICompra, ICompra2Send } from "../model/compra-interface";
import { IPage } from "../model/generic-types-interface";


@Injectable({
    providedIn: 'root'
  })
  
  export class CompraService {
  
    private entityURL = '/compra';
    url: string = ""
  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }
  
    getComprasPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ICompra>> {
      let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);
        if (strSortField != "") { //&sort=codigo,[asc|desc]
          if (strOrderDirection != "") {
            params = params.set("sort", strSortField + "," + strOrderDirection);
          } else {
            params = params.set("sort", strSortField);
          }
        }
      let url: string = `${baseURL}${this.entityURL}`;
      return this.oHttp.get<IPage<ICompra>>(this.url, { params: params });
    }
  
    getOne(id: number): Observable<ICompra> {
      return this.oHttp.get<ICompra>(this.url + "/" + id);
    }
  
    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id);
    }
  
    newOne(oCompra2Send: ICompra2Send): Observable<number> {
      return this.oHttp.post<number>(this.url, oCompra2Send);
    }
  
    updateOne(oCompra2Send: ICompra2Send): Observable<number> {
      return this.oHttp.put<number>(this.url, oCompra2Send);
    }
  
  }