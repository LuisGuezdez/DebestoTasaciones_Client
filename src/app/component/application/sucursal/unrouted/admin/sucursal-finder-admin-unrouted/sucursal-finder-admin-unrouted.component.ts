import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { ISucursal, SucursalResponse } from 'src/app/model/sucursal-interface';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-sucursal-finder-admin-unrouted',
  templateUrl: './sucursal-finder-admin-unrouted.component.html',
  styleUrls: ['./sucursal-finder-admin-unrouted.component.css']
})
export class SucursalFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  responseFromServer!: IPage<ISucursal>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  private pageRegister: number = 5;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oSucursalService: SucursalService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oSucursalService.getSucursalsPlist(this.page, this.numberOfElements, 
      this.strTermFilter)
      .subscribe({
        next: (resp: IPage<ISucursal>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
            this.getPage();
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
    }
    

    setPage(e: number) {
      this.page = (e - 1);
      this.getPage();
    }
  
    setRpp(rpp: number) {
      this.numberOfElements = rpp;
      this.getPage();
    }
  
    setFilter(term: string): void {
      this.strTermFilter = term;
      this.getPage();
    }
  

    selectionSucursal(id: number): void {
      this.closeEvent.emit(id);
    }

}
