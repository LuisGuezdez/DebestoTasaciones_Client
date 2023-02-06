import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPage } from 'src/app/model/generic-types-interface';
import { ITasacion, ITasacion2Send } from 'src/app/model/tasacion-interface';
import { TasacionService } from 'src/app/service/tasacion.service';
import { baseURL } from 'src/environments/environment';

@Component({
  selector: 'app-tasacion-detail-admin-unrouted',
  templateUrl: './tasacion-detail-admin-unrouted.component.html',
  styleUrls: ['./tasacion-detail-admin-unrouted.component.css']
})
export class TasacionDetailAdminUnroutedComponent implements OnInit {

  @Input() id!: number;
  oTasacion!: ITasacion;

  constructor(
    private oTasacionService: TasacionService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oTasacionService.getOne(this.id).subscribe({
      next: (data: ITasacion) => {
        this.oTasacion = data;
        console.log(data);
      }
    })
  }

}
