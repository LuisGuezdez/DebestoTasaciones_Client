import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISucursal } from 'src/app/model/sucursal-interface';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { SucursalService } from 'src/app/service/sucursal.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

  //id: number = 0;
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
  teamDescription: string = "";
  usertypeDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oSucursalService: SucursalService
  ) {
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      apellidos: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
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
          this.modalContent = "Usuario " + this.oUsuario2Send.id + " created";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal)!;
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/usuario/view', this.oUsuario2Send.id])
    })
    this.myModal.show()
  }

  openModalFindTeam(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTeam"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeTeamModal(id_sucursal: number) {
    this.oForm.controls['id_sucursal'].setValue(id_sucursal);
    this.updateTeamDescription(id_sucursal);
    this.myModal.hide();
  }

  updateTeamDescription(id_sucursal: number) {
    this.oSucursalService.getOne(id_sucursal).subscribe({
      next: (data: ISucursal) => {      
        this.teamDescription = data.nombre;        
      },
      error: (error: any) => {
        this.teamDescription = "Sucursal not found";        
        this.oForm.controls['id_sucursal'].setErrors({'incorrect': true});
      }
    })
  }

}
