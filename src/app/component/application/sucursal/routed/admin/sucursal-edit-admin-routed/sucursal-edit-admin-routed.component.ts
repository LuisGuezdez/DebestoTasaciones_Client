import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISucursal, ISucursal2Form, ISucursal2Send } from 'src/app/model/sucursal-interface';
import { SucursalService } from 'src/app/service/sucursal.service';
import { Location} from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-sucursal-edit-admin-routed',
  templateUrl: './sucursal-edit-admin-routed.component.html',
  styleUrls: ['./sucursal-edit-admin-routed.component.css']
})
export class SucursalEditAdminRoutedComponent implements OnInit {

  id: number = 0;
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
    private oFormBuilder: FormBuilder,
    public oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oSucursalService.getOne(this.id).subscribe({
      next: (data: ISucursal) => {
        this.oSucursal = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          localidad: [data.localidad, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          calle: [data.calle, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          postal: [data.postal, [Validators.required, Validators.pattern(/^[0-9]{5}$/)]]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oSucursal2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      localidad: this.oForm.value.localidad,
      calle: this.oForm.value.calle,
      postal: this.oForm.value.postal
    }
    if (this.oForm.valid) {
      this.oSucursalService.updateOne(this.oSucursal2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "DEBESTO";
          this.modalContent = "Sucursal " + data + " editada";
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
