import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aposentadoria',
  templateUrl: './aposentadoria.component.html',
  styleUrls: ['./aposentadoria.component.css']
})
export class AposentadoriaComponent implements OnInit {

  private selectedItem:string = 'servico';

  constructor() { }

  ngOnInit() {
  }
  
  onClick(){
    console.log("Button from Aposentadoria page was clicked!!!");
  }

  onSelect(item:string){
    this.selectedItem = item;
  }

  isServicoSelected(){
    return this.selectedItem === 'servico';
  }

  isContribuicaoSelected(){
    return this.selectedItem === 'contribuicao';
  }

}
