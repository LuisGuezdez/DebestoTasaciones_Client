import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { ICoche, ICoche2Send } from "../model/coche-interface";
import { IPage } from "../model/generic-types-interface";


@Injectable({
  providedIn: 'root'
})

export class CocheService {

  private entityURL = '/coche';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getCochesPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ICoche>> {
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
    return this.oHttp.get<IPage<ICoche>>(this.url, { params: params });
  }

  getOne(id: number): Observable<ICoche> {
    return this.oHttp.get<ICoche>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  newOne(oCoche2Send: ICoche2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oCoche2Send);
  }

  updateOne(oCoche2Send: ICoche2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oCoche2Send);
  }

}