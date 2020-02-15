import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  
  private selectedItem:string = 'concedidos';

  constructor() { }

  ngOnInit() {
  }

  onSelect(item:string){
    this.selectedItem = item;
  }

  onClick(){
    console.log("Button from Beneficios page was clicked!!!");
  }

  isAtivosSelected(){
    return this.selectedItem === 'ativos';
  }

  isConcedidosSelected(){
    return this.selectedItem === 'concedidos';
  }

  isHistoricoSelected(){
    return this.selectedItem === 'historico';
  }

  isIncapacidadeSelected(){
    return this.selectedItem === 'incapacidade';
  }

}
