import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent{
  @ViewChild(ErrorMsgComponent, {static: true}) error: ErrorMsgComponent;
  public lembrete:Lembrete;

  constructor(
    private service: LembreteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getlembrete(this.activatedRoute.snapshot.params.id);
   }

  getlembrete(id: number){
    this.service.getLembrete(id)
    .subscribe((lembrete:Lembrete) =>{
        this.lembrete = lembrete;
      }, 
      () => {this.error.setError('Falha ao buscar lembrete.');});
  }

  atualizaLembrete(lembrete: Lembrete){
    this.service.atualizaLembrete(lembrete)
    .subscribe(
      () => {this.router.navigateByUrl('/');},
      () => {this.error.setError('Falha ao buscar lembrete.');});
  }


}
