import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sal-maternidade',
  templateUrl: './sal-maternidade.component.html',
  styleUrls: ['./sal-maternidade.component.css']
})
export class SalMaternidadeComponent implements OnInit {

  private selectedItem:string = 'empresauf';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Button from Salario Maternidade page was clicked!!!");
  }

  onSelect(item:string){
    this.selectedItem = item;
  }

  isEmpresaUfSelected(){
    return this.selectedItem === 'empresauf';
  }

}
