import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISucursal } from 'src/app/model/sucursal-interface';
import { ITipousuario } from 'src/app/model/usertype-response-interface';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { SucursalService } from 'src/app/service/sucursal.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

  //id: number = 0;
  x!: number;
  oUsuario!: IUsuario;
  oUsuario2Form!: IUsuario2Form;
  oUsuario2Send!: IUsuario2Send;
  oForm!: FormGroup<IUsuario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  sucursalDescription: string = "";
  usertypeDescription: string = "";
  

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oSucursalService: SucursalService,
    private oTipousuarioService: TipousuarioService,
  ) {

    
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      apellidos: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      id_sucursal: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_tipousuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    }); 
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id!,
      nombre: this.oForm.value.nombre!,
      apellidos: this.oForm.value.apellidos!,
      email: this.oForm.value.email!,
      username: this.oForm.value.username!,
      tipousuario: { id: this.oForm.value.id_tipousuario},
      sucursal: { id: this.oForm.value.id_sucursal}
    }
    if (this.oForm.valid) {
      this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "DEBESTO";
          this.modalContent = "Usuario " + data + " created";
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
