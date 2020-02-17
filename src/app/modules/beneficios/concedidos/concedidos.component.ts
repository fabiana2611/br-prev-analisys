import { Component, OnInit } from '@angular/core';
import { OpenDataBrService } from 'src/app/core/http/open-data-br.service';
import { BeneficioService } from '../beneficio.service';

@Component({
  selector: 'app-concedidos',
  templateUrl: './concedidos.component.html',
  styleUrls: ['./concedidos.component.css'],
  providers: [BeneficioService]
})
export class ConcedidosComponent implements OnInit {

  constructor(private beneficioService: BeneficioService){}

  ngOnInit() {
    this.beneficioService.fetchBenConcedidoUfEspecie();
  }

}
