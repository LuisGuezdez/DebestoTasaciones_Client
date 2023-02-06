import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ICoche, ICoche2Form, ICoche2Send } from 'src/app/model/coche-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { CocheService } from 'src/app/service/coche.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-coche-edit-admin-routed',
  templateUrl: './coche-edit-admin-routed.component.html',
  styleUrls: ['./coche-edit-admin-routed.component.css']
})
export class CocheEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  x!: number;
  oCoche!: ICoche;
  oCoche2Form!: ICoche2Form;
  oCoche2Send!: ICoche2Send;
  oForm!: FormGroup<ICoche2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  usuarioDescription: string = "";
  combDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oCocheService: CocheService,
    private oFormBuilder: FormBuilder,
    private oUsuarioService: UsuarioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    this.updateUsuarioDescription(this.id);
  }

  getOne() {
    this.oCocheService.getOne(this.id).subscribe({
      next: (data: ICoche) => {
        this.oCoche = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          marca: [data.marca, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          id_usuario: [data.usuario.id, [Validators.required, Validators.pattern(/^\d{1,7}$/)]],
          modelo: [data.modelo, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
          anyo: [data.anyo, [Validators.required, Validators.pattern(/^(19[0-9][0-9]|20[0-2][0-3])$/)]],
          kms: [data.kms, [Validators.required, Validators.pattern(/^\d{1,7}$/)]],
          combustible: [data.combustible]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oCoche2Send = {
      id: this.oForm.value.id!,
      marca: this.oForm.value.marca!,
      modelo: this.oForm.value.modelo!,
      anyo: this.oForm.value.anyo!,
      kms: this.oForm.value.kms!,
      combustible: this.oForm.value.combustible!,
      usuario: { id: this.oForm.value.id_usuario}
    }
    if (this.oForm.valid) {
      this.oCocheService.newOne(this.oCoche2Send).subscribe({
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
      console.log(this.oCoche2Send.id);
      this.oRouter.navigate(['/admin/coche/view/' + id])
    })
    this.myModal.show()
  }

  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.myModal.hide();
  }

  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUsuario) => {      
        this.usuarioDescription = data.nombre;        
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario no encontrado";        
        this.oForm.controls['id_usuario'].setErrors({'incorrect': true});
      }
    })
  }

  /* updateCombDescription(combustible: string) {
    let comb = document.getElementById(combustible);
    comb.insertAdjacentElement(checked);
  } */

}
