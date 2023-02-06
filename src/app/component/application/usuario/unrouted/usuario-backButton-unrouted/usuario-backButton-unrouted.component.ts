import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-backButton-unrouted',
  templateUrl: './usuario-backButton-unrouted.component.html',
  styleUrls: ['./usuario-backButton-unrouted.component.css']
})
export class UsuarioBackButtonUnroutedComponent implements OnInit {

  constructor(
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.oRouter.navigate(['/admin/usuario/plist/'])
  }

}
