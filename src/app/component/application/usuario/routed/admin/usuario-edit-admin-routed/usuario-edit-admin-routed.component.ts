import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISucursal } from 'src/app/model/sucursal-interface';
import { ITipousuario } from 'src/app/model/usertype-response-interface';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { SucursalService } from 'src/app/service/sucursal.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


declare let bootstrap: any;

@Component({
  selector: 'app-usuario-edit-admin-routed',
  templateUrl: './usuario-edit-admin-routed.component.html',
  styleUrls: ['./usuario-edit-admin-routed.component.css']
})
export class UsuarioEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario!: IUsuario;
  oUsuario2Form!: IUsuario2Form;
  oUsuario2Send!: IUsuario2Send;
  oForm!: FormGroup<IUsuario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  error: HttpErrorResponse;
  sucursalDescription: string = "";
  usertypeDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oSucursalService: SucursalService,
    private oTipousuarioService: TipousuarioService,
    public oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }
  
  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
          apellidos: [data.apellidos, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          username: [data.username, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          id_tipousuario: [data.tipousuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
          id_sucursal: [data.sucursal.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
        });
      this.updateTipousuarioDescription(this.oUsuario.tipousuario.id);
      this.updateSucursalDescription(this.oUsuario.sucursal.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellidos: this.oForm.value.apellidos,
      email: this.oForm.value.email,
      username: this.oForm.value.username,
      sucursal: { id: this.oForm.value.id_sucursal },
      tipousuario: { id: this.oForm.value.id_tipousuario}
    }
    if (this.oForm.valid) {
      this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "DEBESTO";
          this.modalContent = "Usuario " + this.id + " updated";
          this.showModal(data);
        }
      })
    }
  }

  showModal = (id:number) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal)!;
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      console.log(this.oUsuario2Send.id);
      this.oRouter.navigate(['/admin/usuario/view/' + id])
    })
    this.myModal.show()
  }

  openModalFindSucursal(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findSucursal"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeSucursalModal(id_sucursal: number) {
    this.oForm.controls['id_sucursal'].setValue(id_sucursal);
    this.updateSucursalDescription(id_sucursal);
    this.myModal.hide();
  }

  updateSucursalDescription(id_sucursal: number) {
    this.oSucursalService.getOne(id_sucursal).subscribe({
      next: (data: ISucursal) => {      
        this.sucursalDescription = data.nombre;        
      },
      error: (error: any) => {
        this.sucursalDescription = "Sucursal no encontrada";        
        this.oForm.controls['id_sucursal'].setErrors({'incorrect': true});
      }
    })
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipousuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeTipousuarioModal(id_tipousuario: number) {
    this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
    this.updateTipousuarioDescription(id_tipousuario);
    this.myModal.hide();
  }

  updateTipousuarioDescription(id_tipousuario: number) {
    this.oTipousuarioService.getOne(id_tipousuario).subscribe({
      next: (data: ITipousuario) => {      
        this.usertypeDescription = data.tipo;        
      },
      error: (error: any) => {
        this.usertypeDescription = "Tipo de usuario no encontrado";        
        this.oForm.controls['id_tipousuario'].setErrors({'incorrect': true});
      }
    })
  }

}
