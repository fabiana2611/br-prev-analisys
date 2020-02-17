import { Injectable } from '@angular/core';
import { OpenDataBrService } from '../../core/http/open-data-br.service';

@Injectable({providedIn: 'root'}) 
export class AcidenteService {
    
    constructor(private openDataRequest: OpenDataBrService){ }

    fetchAcidenteTrabalhoPorCID(){
        this.openDataRequest.transformDataAcidenteTrabalhoPorCID();
    }

    fetchAcidenteTrabalhoPorUF(){
        this.openDataRequest.transformDataAcidenteTrabalhoPorUF();
    }
}