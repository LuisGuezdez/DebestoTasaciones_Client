import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursal-backButton-unrouted',
  templateUrl: './sucursal-backButton-unrouted.component.html',
  styleUrls: ['./sucursal-backButton-unrouted.component.css']
})
export class SucursalBackButtonUnroutedComponent implements OnInit {

  constructor(
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.oRouter.navigate(['/admin/sucursal/plist/'])
  }

}
