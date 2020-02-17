import { Injectable } from '@angular/core';
import { OpenDataBrService } from '../../core/http/open-data-br.service';

@Injectable() 
export class ContribuicaoService {
    
    constructor(private openDataRequest: OpenDataBrService){ }

    fetchValorArrecadadoPorFonteUF(){
        this.openDataRequest.transformDataAcidenteTrabalhoPorCID();
    }
}