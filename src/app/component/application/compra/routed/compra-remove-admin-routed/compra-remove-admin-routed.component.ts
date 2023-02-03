import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompraService } from 'src/app/service/compra.service';
import { Location } from '@angular/common';


declare let bootstrap: any;

@Component({
  selector: 'app-compra-remove-admin-routed',
  templateUrl: './compra-remove-admin-routed.component.html',
  styleUrls: ['./compra-remove-admin-routed.component.css']
})
export class CompraRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oCompraService: CompraService,
    private oRouter: Router
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oCompraService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Compra " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        //NO SALTA EL MODAL
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

  back(){
    this.oRouter.navigate(['/admin/compra/plist/'])
  }

}
