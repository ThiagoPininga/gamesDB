import { Component } from '@angular/core';
import { RawApiService } from '../../services/raw-api.service';

@Component({
  selector: 'app-listagem-jogos',
  templateUrl: './listagem-jogos.component.html',
  styleUrl: './listagem-jogos.component.scss'
})
export class ListagemJogosComponent {
  jogos: any;

  constructor(private api: RawApiService){}

  ngOnInit() {
    this.api.getGames().subscribe((dado) => {
      this.jogos = dado
      this.jogos = this.jogos.results

      console.log(this.jogos)
    })
  }
}
