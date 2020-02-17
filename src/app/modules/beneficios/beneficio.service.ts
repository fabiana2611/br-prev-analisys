import { Injectable } from '@angular/core';
import { OpenDataBrService } from '../../core/http/open-data-br.service';

@Injectable({providedIn: 'root'}) 
export class BeneficioService {
    
    constructor(private beneficioRequest: OpenDataBrService){ }

    fetchBenConcedidoUfEspecie(){
        this.beneficioRequest.transformDataBenConcedidoUfEspecie();
    }
}