import { Component } from '@angular/core';
import { RawApiService } from '../../services/raw-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {
  jogos: any;
  paginaAtual = 1


  constructor(private api: RawApiService,private route: ActivatedRoute){}

  ngOnInit() {
    this.carregarJogos()
  }

  carregarJogos() {
    this.route.params.subscribe((param) => {
      this.api.getPesquisaGames(param['pesquisa'], this.paginaAtual).subscribe((data) => {
        this.jogos = data
        this.jogos = this.jogos.results
        
      })
    })
  }

  navegarParaPagina(pagina: number) {
    if (pagina >= 1) {
      this.paginaAtual = pagina;
      console.log(this.paginaAtual)
      this.carregarJogos();
    }
  }
}
