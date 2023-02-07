import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISucursal } from 'src/app/model/sucursal-interface';
import { Location} from '@angular/common';

@Component({
  selector: 'app-sucursal-view-admin-routed',
  templateUrl: './sucursal-view-admin-routed.component.html',
  styleUrls: ['./sucursal-view-admin-routed.component.css']
})
export class SucursalViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario!: ISucursal;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    public oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
