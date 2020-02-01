import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribuicao',
  templateUrl: './contribuicao.component.html',
  styleUrls: ['./contribuicao.component.css']
})
export class ContribuicaoComponent implements OnInit {

  private selectedItem:string = 'arrecadacaomensal';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Button from Contribuição page was clicked!!!");
  }

  onSelect(item:string){
    this.selectedItem = item;
  }

  isRecolhimentoEmpresaSelected(){
    return this.selectedItem === 'recolhimentoempresa';
  }

  isOutrosSelected(){
    return this.selectedItem === 'outros';
  }

  isHistoricoSelected(){
    return this.selectedItem === 'historico';
  }

  isEstatisticaUfSelected(){
    return this.selectedItem === 'estatisticauf';
  }

  isEstatisticaIdadeSelected(){
    return this.selectedItem === 'estatisticaidade';
  }

  isArrecadacaoFonteReceitaSelected(){
    return this.selectedItem === 'arrecadacaofontereceita';
  }

  isArrecadacaoMensalSelected(){
    return this.selectedItem === 'arrecadacaomensal';
  }

}
