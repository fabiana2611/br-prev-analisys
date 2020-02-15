import { Component, OnInit } from '@angular/core';
import { OpenDataBrService } from 'src/app/core/http/open-data-br.service';

@Component({
  selector: 'app-por-uf',
  templateUrl: './por-uf.component.html',
  styleUrls: ['./por-uf.component.css']
})
export class PorUfComponent implements OnInit {

  constructor(private openDataService: OpenDataBrService) { }

  ngOnInit() {
    this.openDataService.transformDataAcidenteTrabalhoPorUF();
  }

}
