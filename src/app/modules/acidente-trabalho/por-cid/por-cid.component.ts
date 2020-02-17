import { Component, OnInit } from '@angular/core';
import { AcidenteService } from '../acidente.service';


@Component({
  selector: 'app-por-cid',
  templateUrl: './por-cid.component.html',
  styleUrls: ['./por-cid.component.css'],
  providers: [AcidenteService]
})
export class PorCidComponent implements OnInit {

  constructor(private acidenteService: AcidenteService) { }

  ngOnInit() {
    this.acidenteService.fetchAcidenteTrabalhoPorCID();
  }

}
