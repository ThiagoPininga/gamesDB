import { Routes } from '@angular/router';
import { ListagemJogosComponent } from './componentes/listagem-jogos/listagem-jogos.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { JogoDetalhesComponent } from './componentes/jogo-detalhes/jogo-detalhes.component';

export const routes: Routes = [
    {path: '' , component: ListagemJogosComponent},
    {path: 'pesquisa', component: PesquisaComponent},
    {path: ':nome', component: JogoDetalhesComponent}
]