import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {

  @ViewChild(ErrorMsgComponent, {static: true}) error: ErrorMsgComponent;

  constructor(
    private service: LembreteService,
    private router: Router
  ) { }

  addLembrete(lembrete: Lembrete){
    this.service.addLembrete(lembrete)
    .subscribe(
      () => {this.router.navigateByUrl('/');},
      () => {this.error.setError('Falha ao adicionar lembrete.');}
    );
  }
  
}
