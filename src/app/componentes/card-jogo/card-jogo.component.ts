import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-jogo',
  templateUrl: './card-jogo.component.html',
  styleUrl: './card-jogo.component.scss'
})
export class CardJogoComponent {
  @Input() jogo: any;
}
