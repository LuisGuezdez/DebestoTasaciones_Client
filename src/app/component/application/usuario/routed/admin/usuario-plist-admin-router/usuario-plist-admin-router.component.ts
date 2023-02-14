import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SessionService } from 'src/app/service/session.service';
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';


@Component({
  selector: 'app-usuario-plist-admin-router',
  templateUrl: './usuario-plist-admin-router.component.html',
  styleUrls: ['./usuario-plist-admin-router.component.css']
})
export class UsuarioPlistAdminRouterComponent implements OnInit {

  responseFromServer!: IPage<IUsuario>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  numero !: number;
  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  //
  generatedUsers!: number;

  constructor(
    private oUsuarioService: UsuarioService,
    private oSessionService: SessionService,
    private oRouter: Router

  ) { }

  ngOnInit() {
    this.getPage();
    if (this.oSessionService.getUsertype() == "2") {
      this.oRouter.navigateByUrl('/home')
    }
  }

  getPage() {
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
      console.log(this.oSessionService.getUserId());
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

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
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

  generate() {
    console.log(this.numero);
    this.oUsuarioService.generate(this.numero)
      .subscribe({
        next: (resp: number) => {
          this.generatedUsers = resp;
          alert("ahora hay " + this.generatedUsers + " usuarios");
          this.getPage();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      })
  }
}
