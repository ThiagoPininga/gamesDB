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

  constructor(private api: RawApiService,private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.api.getPesquisaGames(param['pesquisa']).subscribe((data) => {
        this.jogos = data
        this.jogos = this.jogos.results
      })


    })
  }
}
