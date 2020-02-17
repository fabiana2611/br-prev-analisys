import { Component, OnInit } from '@angular/core';
import { OpenDataBrService } from 'src/app/core/http/open-data-br.service';
import { ContribuicaoService } from '../contribuicao.service';

@Component({
  selector: 'app-arrecadacao-por-fonte-receita',
  templateUrl: './arrecadacao-por-fonte-receita.component.html',
  styleUrls: ['./arrecadacao-por-fonte-receita.component.css'],
  providers: [ContribuicaoService]
})
export class ArrecadacaoPorFonteReceitaComponent implements OnInit {

  constructor(private contribuicaoService: ContribuicaoService) { }

  ngOnInit() {
    this.contribuicaoService.fetchValorArrecadadoPorFonteUF();
  }

}
