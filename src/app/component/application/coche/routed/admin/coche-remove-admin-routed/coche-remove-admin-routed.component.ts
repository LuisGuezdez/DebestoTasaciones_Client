import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocheService } from 'src/app/service/coche.service';
import { Location } from '@angular/common';


declare let bootstrap: any;

@Component({
  selector: 'app-coche-remove-admin-routed',
  templateUrl: './coche-remove-admin-routed.component.html',
  styleUrls: ['./coche-remove-admin-routed.component.css']
})
export class CocheRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oCocheService: CocheService,
    private oRouter: Router
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oCocheService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Coche " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

  back(){
    this.oRouter.navigate(['/admin/coche/plist/'])
  }

}
