import { Component, OnInit } from '@angular/core';
import { OpenDataBrService } from 'src/app/core/http/open-data-br.service';

@Component({
  selector: 'app-concedidos',
  templateUrl: './concedidos.component.html',
  styleUrls: ['./concedidos.component.css']
})
export class ConcedidosComponent implements OnInit {


  constructor(private openDataService: OpenDataBrService) { }

  ngOnInit() {
    this.openDataService.transformDataBenConcedidoUfEspecie();
  }

}
