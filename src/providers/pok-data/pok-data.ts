import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from '../../app/models/pokemon';
import { IPokemonDetails } from '../../app/models/pokemon-details';
import { PokemonApiProvider } from './../pokemon-api/pokemon-api';


/*
  Generated class for the PokDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokDataProvider {

  constructor(private pokApi: PokemonApiProvider) {
    console.log('Hello PokDataProvider Provider');
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.pokApi.getPokemons();
  }

  getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails> {
    return this.getPokemonDetails(pok);
  }

}
