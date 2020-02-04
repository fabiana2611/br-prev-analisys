import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { BeneficiosComponent } from './modules/beneficios/beneficios.component';
import { AcidenteTrabalhoComponent } from './modules/acidente-trabalho/acidente-trabalho.component';
import { AposentadoriaComponent } from './modules/aposentadoria/aposentadoria.component';
import { ContribuicaoComponent } from './modules/contribuicao/contribuicao.component';
import { InssComponent } from './modules/inss/inss.component';
import { SalMaternidadeComponent } from './modules/sal-maternidade/sal-maternidade.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'beneficios', component: BeneficiosComponent },
    { path: 'acidente-trabalho', component: AcidenteTrabalhoComponent },
    { path: 'aposentadoria', component: AposentadoriaComponent },
    { path: 'contribuicao', component: ContribuicaoComponent },
    { path: 'inss', component: InssComponent },
    { path: 'sal-maternidade', component: SalMaternidadeComponent }
    //{ path: '**', redirectTo: '/home' },
    //{ path: 'beneficios/:nb', component: BeneficiosComponent }
    //{ path: 'beneficios', component: BeneficiosComponent, children: [
    //  {path: ':nb/:name', component: BeneficiosComponent}
    //] } 
  ];

@NgModule ({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}