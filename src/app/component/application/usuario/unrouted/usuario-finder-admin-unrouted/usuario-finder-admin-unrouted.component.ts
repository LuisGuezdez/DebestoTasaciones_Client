import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-finder-admin-unrouted',
  templateUrl: './usuario-finder-admin-unrouted.component.html',
  styleUrls: ['./usuario-finder-admin-unrouted.component.css']
})
export class UsuarioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  responseFromServer!: IPage<IUsuario>;
  //
  id_usertypeFilter: number = 0;
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
    private oUsuarioService: UsuarioService,
    private oRouter: Router
  ) { }

  ngOnInit(): void {
    console.log(this.oRouter.url);
    this.getPage();
  }

  getPage() {
    // if (this.oRouter.url.indexOf("coche")) {
    //   this.id_usertypeFilter = 2;
    // }
    // if (this.oRouter.url.indexOf("compra")) {
    //   this.id_usertypeFilter = 1;
    // }
    this.oUsuarioService.getUsuariosPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_usertypeFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IUsuario>) => {
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
    
    setOrder(order: string): void {
      this.sortField = order;
      if (this.sortDirection == "asc") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = "asc";
      }
      this.getPage();
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
  

    selectionUsuario(id: number): void {
      this.closeEvent.emit(id);
    }

}
