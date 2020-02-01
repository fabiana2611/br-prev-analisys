import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { AcidenteTrabalhoComponent } from './acidente-trabalho/acidente-trabalho.component';
import { AposentadoriaComponent } from './aposentadoria/aposentadoria.component';
import { SalMaternidadeComponent } from './sal-maternidade/sal-maternidade.component';
import { ContribuicaoComponent } from './contribuicao/contribuicao.component';
import { InssComponent } from './inss/inss.component';
import { ConcedidosComponent } from './beneficios/concedidos/concedidos.component';
import { AtivosComponent } from './beneficios/ativos/ativos.component';
import { PorIncapacidadeComponent } from './beneficios/por-incapacidade/por-incapacidade.component';
import { HistoricoComponent } from './beneficios/historico/historico.component';
import { PorAtividadeComponent } from './acidente-trabalho/por-atividade/por-atividade.component';
import { PorMesComponent } from './acidente-trabalho/por-mes/por-mes.component';
import { PorIdadeComponent } from './acidente-trabalho/por-idade/por-idade.component';
import { PorCidComponent } from './acidente-trabalho/por-cid/por-cid.component';
import { PorUfComponent } from './acidente-trabalho/por-uf/por-uf.component';
import { PorAnosServicoComponent } from './aposentadoria/por-anos-servico/por-anos-servico.component';
import { PorContribuicaoComponent } from './aposentadoria/por-contribuicao/por-contribuicao.component';
import { PorEmpresasUfComponent } from './sal-maternidade/por-empresas-uf/por-empresas-uf.component';
import { EstatisticaPorUfComponent } from './contribuicao/estatistica-por-uf/estatistica-por-uf.component';
import { EstatisticaPorIdadeComponent } from './contribuicao/estatistica-por-idade/estatistica-por-idade.component';
import { RecolhimentoEmpresaComponent } from './contribuicao/recolhimento-empresa/recolhimento-empresa.component';
import { OutrosContribuintesComponent } from './contribuicao/outros-contribuintes/outros-contribuintes.component';
import { HistoricoMensalArrecadacaoComponent } from './contribuicao/historico-mensal-arrecadacao/historico-mensal-arrecadacao.component';
import { ArrecadacaoMensalPorUfComponent } from './contribuicao/arrecadacao-mensal-por-uf/arrecadacao-mensal-por-uf.component';
import { ArrecadacaoPorFonteReceitaComponent } from './contribuicao/arrecadacao-por-fonte-receita/arrecadacao-por-fonte-receita.component';
import { ApsComponent } from './inss/aps/aps.component';
import { IndicadoresPrevidenciaComponent } from './inss/indicadores-previdencia/indicadores-previdencia.component';
import { IndicadoresUnidadeAtendimentoComponent } from './inss/indicadores-unidade-atendimento/indicadores-unidade-atendimento.component';
import { ServicoSocialPorUfComponent } from './inss/servico-social-por-uf/servico-social-por-uf.component';
import { HomeComponent } from './home/home.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeneficiosComponent,
    AcidenteTrabalhoComponent,
    AposentadoriaComponent,
    SalMaternidadeComponent,
    ContribuicaoComponent,
    InssComponent,
    ConcedidosComponent,
    AtivosComponent,
    PorIncapacidadeComponent,
    HistoricoComponent,
    PorAtividadeComponent,
    PorMesComponent,
    PorIdadeComponent,
    PorCidComponent,
    PorUfComponent,
    PorAnosServicoComponent,
    PorContribuicaoComponent,
    PorEmpresasUfComponent,
    EstatisticaPorUfComponent,
    EstatisticaPorIdadeComponent,
    RecolhimentoEmpresaComponent,
    OutrosContribuintesComponent,
    HistoricoMensalArrecadacaoComponent,
    ArrecadacaoMensalPorUfComponent,
    ArrecadacaoPorFonteReceitaComponent,
    ApsComponent,
    IndicadoresPrevidenciaComponent,
    IndicadoresUnidadeAtendimentoComponent,
    ServicoSocialPorUfComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
