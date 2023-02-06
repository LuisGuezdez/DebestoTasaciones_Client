import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasacionService } from 'src/app/service/tasacion.service';
import { Location } from '@angular/common';


declare let bootstrap: any;
@Component({
  selector: 'app-tasacion-remove-admin-routed',
  templateUrl: './tasacion-remove-admin-routed.component.html',
  styleUrls: ['./tasacion-remove-admin-routed.component.css']
})
export class TasacionRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTasacionService: TasacionService,
    private oRouter: Router
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oTasacionService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tasacion " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

  back(){
    this.oRouter.navigate(['/admin/tasacion/plist/'])
  }

}
