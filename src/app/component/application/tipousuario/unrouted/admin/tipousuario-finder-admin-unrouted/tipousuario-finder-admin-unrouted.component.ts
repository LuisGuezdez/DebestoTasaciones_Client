import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { ITipousuario } from 'src/app/model/usertype-response-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-finder-admin-unrouted',
  templateUrl: './tipousuario-finder-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-finder-admin-unrouted.component.css']
})
export class TipousuarioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();


  responseFromServer!: IPage<ITipousuario>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;

  constructor(
    private oTipousuarioService: TipousuarioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oTipousuarioService.getTipousuarioPlist(this.page, this.numberOfElements, 
      this.strTermFilter)
      .subscribe({
        next: (resp: IPage<ITipousuario>) => {
          this.responseFromServer = resp;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
    }

  selectionTipousuario(id: number): void {
    this.closeEvent.emit(id);
  }

}
