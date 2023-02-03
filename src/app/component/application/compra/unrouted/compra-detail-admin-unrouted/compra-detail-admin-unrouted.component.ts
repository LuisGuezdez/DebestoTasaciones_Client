import { Component, Input, OnInit } from '@angular/core';
import { ICompra } from 'src/app/model/compra-interface';
import { CompraService } from 'src/app/service/compra.service';

@Component({
  selector: 'app-compra-detail-admin-unrouted',
  templateUrl: './compra-detail-admin-unrouted.component.html',
  styleUrls: ['./compra-detail-admin-unrouted.component.css']
})
export class CompraDetailAdminUnroutedComponent implements OnInit {

  @Input() id!: number;
  oCompra: ICompra;

  constructor(
    private oCompraService: CompraService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oCompraService.getOne(this.id).subscribe({
      next: (data: ICompra) => {
        this.oCompra = data;
        console.log(data);
      }
    })
  }

}
