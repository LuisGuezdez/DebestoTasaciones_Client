import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-home-cliente-routed',
  templateUrl: './usuario-home-cliente-routed.component.html',
  styleUrls: ['./usuario-home-cliente-routed.component.css']
})
export class UsuarioHomeClienteRoutedComponent implements OnInit {

  username: string;

  constructor(
    private oUsuarioService: UsuarioService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) { }

  ngOnInit() {
    this.username = this.oSessionService.getUserName();
  }

}
