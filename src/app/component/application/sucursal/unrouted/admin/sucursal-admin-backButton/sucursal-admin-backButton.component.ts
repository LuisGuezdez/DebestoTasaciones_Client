import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursal-admin-backButton',
  templateUrl: './sucursal-admin-backButton.component.html',
  styleUrls: ['./sucursal-admin-backButton.component.css']
})
export class SucursalAdminBackButtonComponent implements OnInit {

  constructor(
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.oRouter.navigate(['/admin/usuario/plist/'])
  }

}
