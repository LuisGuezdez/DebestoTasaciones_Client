import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-bacButton-admin-unrouted',
  templateUrl: './compra-bacButton-admin-unrouted.component.html',
  styleUrls: ['./compra-bacButton-admin-unrouted.component.css']
})
export class CompraBacButtonAdminUnroutedComponent implements OnInit {

  constructor(
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.oRouter.navigate(['/admin/compra/plist/'])
  }

}
