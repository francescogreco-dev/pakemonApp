import { IPokemonData } from './../../app/models/pokemon-data';
import { IpokemonResult } from './../../app/models/pokemon-results';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from '../../app/models/pokemon';
import { IPokemonDetails } from '../../app/models/pokemon-details';
import { pipe } from 'rxjs';

/*
  Generated class for the PokemonApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonApiProvider {
  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private limit = 1000;
  constructor(public http: HttpClient) {
    console.log('Hello PokemonApiProvider Provider');
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<IpokemonResult>(this.pokeUrl + '?limit=' + this.limit).pipe(
      map((res: IpokemonResult) => res.results),
      map((res: [IPokemonData]) => {
        return res.map(pokdata => new Pokemon(pokdata));
      }),
      tap(res => {
        localStorage.setItem('pokemons', JSON.stringify(res));
      })
    );
  }

  getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails> {
    return this.http.get<IPokemonDetails>(this.pokeUrl + pok.id).pipe(
      tap(res => {
        localStorage.setItem('pokemon', JSON.stringify(res));
      })
    );

  }

}
