import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //constructor(private router: Router){}

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    console.log("Menu selecionado: " + feature);
    this.featureSelected.emit(feature);

    //this.router.navigate(['/beneficios']);
  }

}
