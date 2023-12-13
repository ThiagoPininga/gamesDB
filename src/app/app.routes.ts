import { Routes } from '@angular/router';
import { ListagemJogosComponent } from './componentes/listagem-jogos/listagem-jogos.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { JogoDetalhesComponent } from './componentes/jogo-detalhes/jogo-detalhes.component';

export const routes: Routes = [
    {path: '' , component: ListagemJogosComponent},
    {path: 'pesquisa/:pesquisa', component: PesquisaComponent},
    {path: 'pesquisa/:pesquisa/:nome', component: JogoDetalhesComponent},
    {path: ':nome', component: JogoDetalhesComponent}
    
]