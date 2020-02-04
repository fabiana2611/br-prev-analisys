import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acidente-trabalho',
  templateUrl: './acidente-trabalho.component.html',
  styleUrls: ['./acidente-trabalho.component.css']
})
export class AcidenteTrabalhoComponent implements OnInit {

  private selectedItem:string = 'atividade';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Button from Acidente de Trabalho page was clicked!!!");
  }

  onSelect(item:string){
    this.selectedItem = item;
  }

  isAtividadeSelected(){
    return this.selectedItem === 'atividade';
  }

  isCidSelected(){
    return this.selectedItem === 'cid';
  }

  isIdadeSelected(){
    return this.selectedItem === 'idade';
  }

  isMesSelected(){
    return this.selectedItem === 'mes';
  }

  isUfSelected(){
    return this.selectedItem === 'uf';
  }

}
