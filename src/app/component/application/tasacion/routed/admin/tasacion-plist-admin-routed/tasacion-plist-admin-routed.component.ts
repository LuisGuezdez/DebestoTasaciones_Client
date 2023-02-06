import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { ITasacion } from 'src/app/model/tasacion-interface';
import { TasacionService } from 'src/app/service/tasacion.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasacion-plist-admin-routed',
  templateUrl: './tasacion-plist-admin-routed.component.html',
  styleUrls: ['./tasacion-plist-admin-routed.component.css']
})
export class TasacionPlistAdminRoutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  responseFromServer!: IPage<ITasacion>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  private pageRegister: number = 5;
  sortField: string = "";
  sortDirection: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oTasacionService:TasacionService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oTasacionService.getTasacionesPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.sortField, this.sortDirection).subscribe({
        next: (resp: IPage<ITasacion>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
            this.getPage();
            console.log(this.responseFromServer)
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
    setOrder(order: string): void {
      this.sortField = order;
      if (this.sortDirection == "asc") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = "asc";
      }
      this.getPage();
    }

}
