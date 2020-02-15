import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BeneficiosComponent } from './modules/beneficios/beneficios.component';
import { AcidenteTrabalhoComponent } from './modules/acidente-trabalho/acidente-trabalho.component';
import { AposentadoriaComponent } from './modules/aposentadoria/aposentadoria.component';
import { SalMaternidadeComponent } from './modules/sal-maternidade/sal-maternidade.component';
import { ContribuicaoComponent } from './modules/contribuicao/contribuicao.component';
import { InssComponent } from './modules/inss/inss.component';
import { ConcedidosComponent } from './modules/beneficios/concedidos/concedidos.component';
import { AtivosComponent } from './modules/beneficios/ativos/ativos.component';
import { PorIncapacidadeComponent } from './modules/beneficios/por-incapacidade/por-incapacidade.component';
import { HistoricoComponent } from './modules/beneficios/historico/historico.component';
import { PorAtividadeComponent } from './modules/acidente-trabalho/por-atividade/por-atividade.component';
import { PorMesComponent } from './modules/acidente-trabalho/por-mes/por-mes.component';
import { PorIdadeComponent } from './modules/acidente-trabalho/por-idade/por-idade.component';
import { PorCidComponent } from './modules/acidente-trabalho/por-cid/por-cid.component';
import { PorUfComponent } from './modules/acidente-trabalho/por-uf/por-uf.component';
import { PorAnosServicoComponent } from './modules/aposentadoria/por-anos-servico/por-anos-servico.component';
import { PorContribuicaoComponent } from './modules/aposentadoria/por-contribuicao/por-contribuicao.component';
import { PorEmpresasUfComponent } from './modules/sal-maternidade/por-empresas-uf/por-empresas-uf.component';
import { EstatisticaPorUfComponent } from './modules/contribuicao/estatistica-por-uf/estatistica-por-uf.component';
import { EstatisticaPorIdadeComponent } from './modules/contribuicao/estatistica-por-idade/estatistica-por-idade.component';
import { RecolhimentoEmpresaComponent } from './modules/contribuicao/recolhimento-empresa/recolhimento-empresa.component';
import { OutrosContribuintesComponent } from './modules/contribuicao/outros-contribuintes/outros-contribuintes.component';
import { HistoricoMensalArrecadacaoComponent } from './modules/contribuicao/historico-mensal-arrecadacao/historico-mensal-arrecadacao.component';
import { ArrecadacaoMensalPorUfComponent } from './modules/contribuicao/arrecadacao-mensal-por-uf/arrecadacao-mensal-por-uf.component';
import { ArrecadacaoPorFonteReceitaComponent } from './modules/contribuicao/arrecadacao-por-fonte-receita/arrecadacao-por-fonte-receita.component';
import { ApsComponent } from './modules/inss/aps/aps.component';
import { IndicadoresPrevidenciaComponent } from './modules/inss/indicadores-previdencia/indicadores-previdencia.component';
import { IndicadoresUnidadeAtendimentoComponent } from './modules/inss/indicadores-unidade-atendimento/indicadores-unidade-atendimento.component';
import { ServicoSocialPorUfComponent } from './modules/inss/servico-social-por-uf/servico-social-por-uf.component';
import { HomeComponent } from './modules/home/home.component';
import { AppRoutingModule } from './app-routing.module';



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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
