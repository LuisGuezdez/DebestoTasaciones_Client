import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from 'src/app/service/sucursal.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-sucursal-remove-admin-routed',
  templateUrl: './sucursal-remove-admin-routed.component.html',
  styleUrls: ['./sucursal-remove-admin-routed.component.css']
})
export class SucursalRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oSucursalService: SucursalService,
    private oRouter: Router
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oSucursalService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Sucursal " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

  back(){
    this.oRouter.navigate(['/admin/sucursal/plist/'])
  }

}
