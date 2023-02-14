
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private oSessionService: SessionService,
    protected oRouter: Router

  ) {}

  ngOnInit(): void {
    console.log(this.oSessionService.getUsertype());
    console.log(this.oSessionService.getUserId());
    if (this.oSessionService.getUsertype() == "") {
      this.oRouter.navigateByUrl('/login')
    }else if (this.oSessionService.getUsertype()=="2") {
      this.oRouter.navigate(['/cliente/usuario/home']);
    }
  }

}
