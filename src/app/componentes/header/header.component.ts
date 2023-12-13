import { Router } from '@angular/router';
import { RawApiService } from './../../services/raw-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pesquisa: string = ''
  

  constructor(private api: RawApiService, private router: Router){}

  ngOnInit() {
    const input = document.querySelector("input")
    console.log(input)
  }

  pesquisar(){
    this.router.navigate(['/pesquisa', this.pesquisa])
  }
}
