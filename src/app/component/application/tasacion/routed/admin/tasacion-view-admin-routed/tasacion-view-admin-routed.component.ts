import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITasacion } from 'src/app/model/tasacion-interface';

@Component({
  selector: 'app-tasacion-view-admin-routed',
  templateUrl: './tasacion-view-admin-routed.component.html',
  styleUrls: ['./tasacion-view-admin-routed.component.css']
})
export class TasacionViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oTasacion: ITasacion;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
