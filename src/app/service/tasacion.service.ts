import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { ITasacion, ITasacion2Send } from "../model/tasacion-interface";


@Injectable({
    providedIn: 'root'
  })
  
  export class TasacionService {
  
    private entityURL = '/tasacion';
    url: string = ""
  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }
  
    getTasacionesPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ITasacion>> {
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
      return this.oHttp.get<IPage<ITasacion>>(this.url, { params: params });
    }
  
    getOne(id: number): Observable<ITasacion> {
      return this.oHttp.get<ITasacion>(this.url + "/" + id);
    }

    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id);
    }

    newOne(oTasacion2Send: ITasacion2Send): Observable<number> {       
      return this.oHttp.post<number>(this.url, oTasacion2Send);
    }

    updateOne(oTasacion2Send: ITasacion2Send): Observable<number> {
      return this.oHttp.put<number>(this.url, oTasacion2Send);
    }
  
  }