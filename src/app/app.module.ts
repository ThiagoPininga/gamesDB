import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListagemJogosComponent } from './componentes/listagem-jogos/listagem-jogos.component';
import { CardJogoComponent } from './componentes/card-jogo/card-jogo.component';
import { JogoDetalhesComponent } from './componentes/jogo-detalhes/jogo-detalhes.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemJogosComponent,
    CardJogoComponent,
    JogoDetalhesComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
