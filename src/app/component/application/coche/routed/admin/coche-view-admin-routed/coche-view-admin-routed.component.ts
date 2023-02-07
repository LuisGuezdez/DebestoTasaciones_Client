import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoche } from 'src/app/model/coche-interface';
import { Location} from '@angular/common';

@Component({
  selector: 'app-coche-view-admin-routed',
  templateUrl: './coche-view-admin-routed.component.html',
  styleUrls: ['./coche-view-admin-routed.component.css']
})
export class CocheViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oCoche: ICoche;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    public oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
