import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICoche } from 'src/app/model/coche-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { CocheService } from 'src/app/service/coche.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

declare let bootstrap: any;
@Component({
  selector: 'app-coche-plist-cliente-unrouted',
  templateUrl: './coche-plist-cliente-unrouted.component.html',
  styleUrls: ['./coche-plist-cliente-unrouted.component.css']
})
export class CochePlistClienteUnroutedComponent implements OnInit {

  //@Output() cocheID = new EventEmitter<number>();

  responseFromServer!: IPage<ICoche>;
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
  myModal: any;
  modalTitle: string = "";
  id: number = 0;
  id_coche:number;


  constructor(
    private oCocheService: CocheService,
    public oLocation: Location
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oCocheService.getCochesPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<ICoche>) => {
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
  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

  openModal(id:number) {
    this.id_coche = id;
    console.log(this.id_coche);
    const myModal = new bootstrap.Modal('#removeCoche', {
      keyboard: false
    })
    myModal.show();
  }

  removeOne() {
    console.log(this.id_coche);
    this.oCocheService.removeOne(this.id_coche).subscribe({
      next: (data: number) => {
      }
    })
    window.location.reload();
  }
}
