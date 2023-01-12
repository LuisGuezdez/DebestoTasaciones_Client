import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { httpOptions } from "src/environments/environment";

export class generate{

    constructor(private oHttp:HttpClient){

    }

    generate(amount: number): Observable<number> {
        return this.oHttp.post<number>(this.url + '/generate/' + amount, httpOptions);
      }


    
}