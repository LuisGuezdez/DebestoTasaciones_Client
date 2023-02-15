import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-home-cliente-routed',
  templateUrl: './usuario-home-cliente-routed.component.html',
  styleUrls: ['./usuario-home-cliente-routed.component.css']
})
export class UsuarioHomeClienteRoutedComponent implements OnInit {

  username: string;
  id_user: number;
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oUsuarioService: UsuarioService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) {
    this.id_user = parseInt(oSessionService.getUserId());
  }

  ngOnInit() {
    this.username = this.oSessionService.getUserName();
    console.log(this.id_user);
  }

  openModal() {
    const myModal = new bootstrap.Modal('#removeInfo', {
      keyboard: false
    })
    myModal.show();
  }

  removeOne() {
    //this.oRouter.navigate(['/login']);
    this.oUsuarioService.removeOne(this.id_user).subscribe({
      next: (data: number) => {
      }
    })
    this.logout();
  }

  logout() {
    this.oSessionService.logout();
    this.oSessionService.emit(new EmitEvent(Events.logout, ""));
    window.location.reload();
  }

}
