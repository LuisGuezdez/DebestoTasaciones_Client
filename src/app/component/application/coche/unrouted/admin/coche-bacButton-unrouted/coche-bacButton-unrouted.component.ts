import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coche-bacButton-unrouted',
  templateUrl: './coche-bacButton-unrouted.component.html',
  styleUrls: ['./coche-bacButton-unrouted.component.css']
})
export class CocheBacButtonUnroutedComponent implements OnInit {

  constructor(
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.oRouter.navigate(['/admin/coche/plist/'])
  }

}
