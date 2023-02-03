import { Component, Input, OnInit } from '@angular/core';
import { ICoche } from 'src/app/model/coche-interface';
import { CocheService } from 'src/app/service/coche.service';

@Component({
  selector: 'app-coche-detail-admin-unrouted',
  templateUrl: './coche-detail-admin-unrouted.component.html',
  styleUrls: ['./coche-detail-admin-unrouted.component.css']
})
export class CocheDetailAdminUnroutedComponent implements OnInit {

  @Input() id!: number;
  oCoche: ICoche;

  constructor(
    private oCocheService: CocheService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oCocheService.getOne(this.id).subscribe({
      next: (data: ICoche) => {
        this.oCoche = data;
        console.log(data);
      }
    })
  }

}
