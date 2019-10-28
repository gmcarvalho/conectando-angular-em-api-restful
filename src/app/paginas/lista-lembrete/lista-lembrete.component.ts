import { Component, OnInit, ViewChild } from '@angular/core';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  constructor(
    private lembreteService: LembreteService
  ) { }

  public lembretes: Lembrete[];
  @ViewChild(ErrorMsgComponent, {static: true}) error: ErrorMsgComponent;

  ngOnInit() {
    this.getListaLembretes();
  }

  getListaLembretes(){
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) =>{
          this.lembretes = lembretes;
      }, () => {this.error.setError('Falha ao buscar lembretes.'); });
  }

  deletaLembrete(id: number){
    this.lembreteService.deletaLembrete(id)
      .subscribe(() =>{
          this.getListaLembretes();
      }, () => {this.error.setError('Falha ao deletar lembrete.'); });
  }

  existeLembretes(): boolean{
    return this.lembretes && this.lembretes.length > 0;
  }

}
