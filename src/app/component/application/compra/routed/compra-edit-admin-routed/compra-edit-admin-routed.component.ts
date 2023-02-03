import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ICoche } from 'src/app/model/coche-interface';
import { ICompra, ICompra2Form, ICompra2Send } from 'src/app/model/compra-interface';
import { ISucursal } from 'src/app/model/sucursal-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { CocheService } from 'src/app/service/coche.service';
import { CompraService } from 'src/app/service/compra.service';
import { SucursalService } from 'src/app/service/sucursal.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-compra-edit-admin-routed',
  templateUrl: './compra-edit-admin-routed.component.html',
  styleUrls: ['./compra-edit-admin-routed.component.css']
})
export class CompraEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  x!: number;
  oCompra!: ICompra;
  oCompra2Form!: ICompra2Form;
  oCompra2Send!: ICompra2Send;
  oForm!: FormGroup<ICompra2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  usuarioDescription: string = "";
  cocheDescription: string = "";
  sucursalDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oCompraService: CompraService,
    private oFormBuilder: FormBuilder,
    private oCocheService: CocheService,
    private oUsuarioService: UsuarioService,
    private oSucursalService: SucursalService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    this.updateUsuarioDescription(this.id);
    this.updateSucursalDescription(this.id);
    this.updateCocheDescription(this.id);
  }

  getOne() {
    this.oCompraService.getOne(this.id).subscribe({
      next: (data: ICompra) => {
        this.oCompra = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          precio: [data.precio, [Validators.required, Validators.pattern(/^\d{1,7}$/)]],
          id_usuario: [data.usuario.id, [Validators.required, Validators.pattern(/^\d{1,7}$/)]],
          id_coche: [data.coche.id, [Validators.required, Validators.pattern(/^\d{1,7}$/)]],
          id_sucursal: [data.sucursal.id, [Validators.required, Validators.pattern(/^\d{1,7}$/)]]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oCompra2Send = {
      id: this.oForm.value.id!,
      precio: this.oForm.value.precio!,
      usuario: { id: this.oForm.value.id_usuario},
      coche: { id: this.oForm.value.id_coche},
      sucursal: { id: this.oForm.value.id_sucursal}

    }
    if (this.oForm.valid) {
      this.oCompraService.updateOne(this.oCompra2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "DEBESTO";
          this.modalContent = "Compra " + data + " created";
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
      console.log(this.oCompra2Send.id);
      this.oRouter.navigate(['/admin/compra/view/' + id])
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

  openModalFindCoche(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findCoche"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeCocheModal(id_coche: number) {
    this.oForm.controls['id_coche'].setValue(id_coche);
    this.updateCocheDescription(id_coche);
    this.myModal.hide();
  }

  updateCocheDescription(id_coche: number) {
    this.oCocheService.getOne(id_coche).subscribe({
      next: (data: ICoche) => {      
        this.cocheDescription = data.marca;        
      },
      error: (error: any) => {
        this.cocheDescription = "Coche no encontrado";        
        this.oForm.controls['id_coche'].setErrors({'incorrect': true});
      }
    })
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

}
