import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inss',
  templateUrl: './inss.component.html',
  styleUrls: ['./inss.component.css']
})
export class InssComponent implements OnInit {

  private selectedItem:string = 'aps';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Button from INSS page was clicked!!!");
  }

  onSelect(item:string){
    this.selectedItem = item;
  }

  isApsSelected(){
    return this.selectedItem === 'aps';
  }

  isIndPrevSelected(){
    return this.selectedItem === 'indprev';
  }

  isIndUnidadeSelected(){
    return this.selectedItem === 'indunidade';
  }

  isServicoSocialSelected(){
    return this.selectedItem === 'servicosocial';
  }

}
