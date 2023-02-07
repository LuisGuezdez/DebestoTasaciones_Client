import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICompra } from 'src/app/model/compra-interface';
import { Location} from '@angular/common';

@Component({
  selector: 'app-compra-view-admin-routed',
  templateUrl: './compra-view-admin-routed.component.html',
  styleUrls: ['./compra-view-admin-routed.component.css']
})
export class CompraViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oCompra: ICompra;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    public oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
