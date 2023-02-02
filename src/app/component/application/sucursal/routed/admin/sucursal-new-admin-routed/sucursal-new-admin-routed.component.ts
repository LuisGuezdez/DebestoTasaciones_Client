import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISucursal, ISucursal2Form, ISucursal2Send } from 'src/app/model/sucursal-interface';
import { SucursalService } from 'src/app/service/sucursal.service';

declare let bootstrap: any;

@Component({
  selector: 'app-sucursal-new-admin-routed',
  templateUrl: './sucursal-new-admin-routed.component.html',
  styleUrls: ['./sucursal-new-admin-routed.component.css']
})
export class SucursalNewAdminRoutedComponent implements OnInit {

  oSucursal!: ISucursal;
  oSucursal2Form!: ISucursal2Form;
  oSucursal2Send!: ISucursal2Send;
  oForm!: FormGroup<ISucursal2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oSucursalService: SucursalService,
    private oFormBuilder: FormBuilder
  ) {
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      localidad: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      calle: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      postal: ["", [Validators.required, Validators.pattern(/^[0-9]{5}$/)]]
    }); 
  }

  onSubmit() {
    console.log("onSubmit");
    this.oSucursal2Send = {
      id: this.oForm.value.id!,
      nombre: this.oForm.value.nombre!,
      localidad: this.oForm.value.localidad!,
      calle: this.oForm.value.calle!,
      postal: this.oForm.value.postal!
    }
    if (this.oForm.valid) {
      this.oSucursalService.newOne(this.oSucursal2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "DEBESTO";
          this.modalContent = "Sucursal " + data + " created";
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
      console.log(this.oSucursal2Send.id);
      this.oRouter.navigate(['/admin/sucursal/view/' + id])
    })
    this.myModal.show()
  }

}