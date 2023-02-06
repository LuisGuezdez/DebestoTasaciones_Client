import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { Location} from '@angular/common';

@Component({
  selector: 'app-usuario-view-admin-routed',
  templateUrl: './usuario-view-admin-routed.component.html',
  styleUrls: ['./usuario-view-admin-routed.component.css']
})
export class UsuarioViewAdminRoutedComponent implements OnInit {

  id: number = 0;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    public oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }
  
  ngOnInit() {
  }

}
