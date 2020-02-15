import { Component, OnInit } from '@angular/core';
import { OpenDataBrService } from 'src/app/core/http/open-data-br.service';

@Component({
  selector: 'app-arrecadacao-por-fonte-receita',
  templateUrl: './arrecadacao-por-fonte-receita.component.html',
  styleUrls: ['./arrecadacao-por-fonte-receita.component.css']
})
export class ArrecadacaoPorFonteReceitaComponent implements OnInit {

  constructor(private openDataService: OpenDataBrService) { }

  ngOnInit() {
    this.openDataService.transformDataAcidenteTrabalhoPorUF();
  }

}
