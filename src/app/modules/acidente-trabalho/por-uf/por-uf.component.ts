import { Component, OnInit } from '@angular/core';
import { AcidenteService } from '../acidente.service';

@Component({
  selector: 'app-por-uf',
  templateUrl: './por-uf.component.html',
  styleUrls: ['./por-uf.component.css'],
  providers: [AcidenteService]
})
export class PorUfComponent implements OnInit {

  constructor(private acidenteService: AcidenteService) { }

  ngOnInit() {
    this.acidenteService.fetchAcidenteTrabalhoPorUF();
  }

}
