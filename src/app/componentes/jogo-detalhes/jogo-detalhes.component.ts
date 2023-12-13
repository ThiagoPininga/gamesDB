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
  plataformas: any = {
    pc: '../../assets/windows.svg',
    xbox: '../../assets/xbox.svg',
    playstation: '../../assets/playstation.svg',
    nintendo: '../../assets/nintendo.svg'
  };

  constructor(private route: ActivatedRoute, private api: RawApiService){}

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.jogo = params['nome']

      this.api.getGameEspecifico(this.jogo).subscribe((data) => {
        this.jogo = data
        console.log(this.jogo)    

        this.jogo.nome = this.jogo.name 
        this.jogo.img = this.jogo.background_image
        this.jogo.plataformas = this.jogo.parent_platforms
        this.jogo.descricao = this.jogo.description
        this.jogo.rating = this.jogo.metacritic
        
        console.log(this.jogo.plataformas)
      })
    })
  }
}