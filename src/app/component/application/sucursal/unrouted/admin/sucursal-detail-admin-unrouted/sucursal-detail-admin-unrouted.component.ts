import { Component, Input, OnInit } from '@angular/core';
import { ISucursal } from 'src/app/model/sucursal-interface';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-sucursal-detail-admin-unrouted',
  templateUrl: './sucursal-detail-admin-unrouted.component.html',
  styleUrls: ['./sucursal-detail-admin-unrouted.component.css']
})
export class SucursalDetailAdminUnroutedComponent implements OnInit {

  @Input() id!: number;
  oSucursal!: ISucursal;

  constructor(
    private oSucursalService: SucursalService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oSucursalService.getOne(this.id).subscribe({
      next: (data: ISucursal) => {
        this.oSucursal = data;
        let cliente1 = document.querySelector("#cliente1");
        let cliente3 = document.querySelector("#cliente2");
        let cliente2 = document.querySelector("#cliente3");

        if (this.oSucursal.id == 3) {
          cliente1!.remove();
          cliente2!.remove();
          cliente3!.remove();
        }
        console.log(data);
      }
    })
  }

}
