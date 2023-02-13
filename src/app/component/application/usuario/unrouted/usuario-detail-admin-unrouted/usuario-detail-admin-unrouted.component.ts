import { Component, Input, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-detail-admin-unrouted',
  templateUrl: './usuario-detail-admin-unrouted.component.html',
  styleUrls: ['./usuario-detail-admin-unrouted.component.css']
})
export class UsuarioDetailAdminUnroutedComponent implements OnInit {

  _id: number = 0;
  get id(): number {
    return this._id
  }
  @Input() set id(id: number) {
    this._id = id;
    this.getOne();
  };


  oUsuario: IUsuario;

  constructor(
    private oUsuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    if (this._id > 0) {
      this.oUsuarioService.getOne(this._id).subscribe({
        next: (data: IUsuario) => {
          this.oUsuario = data;
          let coches = document.getElementById("coches");
          let sucursal = document.getElementById("sucursal");
          if (this.oUsuario.tipousuario.id == 2) {
            coches!.innerHTML = "<td>Coches</td><td>" + this.oUsuario.coches + "</td>"
          }else{
            sucursal.innerHTML = "<td>Sucursal</td><td>" + this.oUsuario.sucursal.nombre + "</td>"
          }
          console.log(data);
        }
      })
    }
  }

}