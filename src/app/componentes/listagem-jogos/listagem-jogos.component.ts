import { Component } from '@angular/core';
import { RawApiService } from '../../services/raw-api.service';

@Component({
  selector: 'app-listagem-jogos',
  templateUrl: './listagem-jogos.component.html',
  styleUrls: ['./listagem-jogos.component.scss']
})
export class ListagemJogosComponent {
  jogos: any;
  paginaAtual = 1; 
  tamanhoPagina = 24; 

  constructor(private api: RawApiService) {}

  ngOnInit() {
    this.carregarJogos();
  }

  carregarJogos() {
    this.api.getGames(this.paginaAtual, this.tamanhoPagina).subscribe((dados) => {
      this.jogos = dados;
      this.jogos = this.jogos.results
      console.log(this.jogos);
    });
  }

  navegarParaPagina(pagina: number) {
    if (pagina >= 1) {
      this.paginaAtual = pagina;
      console.log(this.paginaAtual)
      this.carregarJogos();
    }
  }
}
