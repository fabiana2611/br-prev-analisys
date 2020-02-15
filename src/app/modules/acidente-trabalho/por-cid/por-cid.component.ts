import { Component, OnInit } from '@angular/core';
import { OpenDataBrService } from 'src/app/core/http/open-data-br.service';

@Component({
  selector: 'app-por-cid',
  templateUrl: './por-cid.component.html',
  styleUrls: ['./por-cid.component.css']
})
export class PorCidComponent implements OnInit {

  constructor(private openDataService: OpenDataBrService) { }

  ngOnInit() {
    this.openDataService.transformDataAcidenteTrabalhoPorCID();
  }

}
