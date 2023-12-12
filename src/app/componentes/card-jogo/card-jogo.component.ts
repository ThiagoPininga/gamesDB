import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-jogo',
  templateUrl: './card-jogo.component.html',
  styleUrl: './card-jogo.component.scss'
})
export class CardJogoComponent {
  @Input() jogo: any;

  constructor(){}

  ngOnInit() {
    this.jogo.img = this.jogo.background_image
    this.jogo.slug = this.jogo.slug
    this.jogo.nome = this.jogo.name
    this.jogo.rating = this.jogo.metacritic
  }
}
