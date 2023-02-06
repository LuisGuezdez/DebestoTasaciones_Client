import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasacion-backButton-unrouted',
  templateUrl: './tasacion-backButton-unrouted.component.html',
  styleUrls: ['./tasacion-backButton-unrouted.component.css']
})
export class TasacionBackButtonUnroutedComponent implements OnInit {

  constructor(
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.oRouter.navigate(['/admin/tasacion/plist/'])
  }

}
