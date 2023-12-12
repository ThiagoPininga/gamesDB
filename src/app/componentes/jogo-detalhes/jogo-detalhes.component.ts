import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawApiService } from '../../services/raw-api.service';

@Component({
  selector: 'app-jogo-detalhes',
  templateUrl: './jogo-detalhes.component.html',
  styleUrl: './jogo-detalhes.component.scss'
})
export class JogoDetalhesComponent {
  jogo: any;

  constructor(private route: ActivatedRoute, private api: RawApiService){}

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.jogo = params['nome']

      this.api.getGameEspecifico(this.jogo).subscribe((data) => {
        this.jogo = data
        console.log(this.jogo)
        this.jogo.nome = this.jogo.name 
        this.jogo.img = this.jogo.background_image
        this.jogo.descricao = this.jogo.description
        console.log(this.jogo.descricao)
      })
    })
  }
}
