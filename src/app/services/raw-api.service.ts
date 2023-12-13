import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RawApiService {
  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(`https://api.rawg.io/api/games?key=75c82a3be8af4256b5309dc22b0af705&page_size=24`)
  }

  getGameEspecifico(nome: string){
    return this.http.get(`https://api.rawg.io/api/games/${nome}?key=75c82a3be8af4256b5309dc22b0af705`)
  }

  getPesquisaGames(pesquisa:any){
    return this.http.get(`https://api.rawg.io/api/games?key=75c82a3be8af4256b5309dc22b0af705&search=${pesquisa}&page_size=24`)
   }
}
