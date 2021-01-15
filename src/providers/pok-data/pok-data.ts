import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
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
    if(localStorage.getItem('pokemons')){
      const pokResult = JSON.parse(localStorage.getItem('pokemons'));
      if(pokResult){
        return of(pokResult);
      }
    }
    return this.pokApi.getPokemons();
  }

  getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails> {
    if(localStorage.getItem('pokemon')){
      const pokResult = JSON.parse(localStorage.getItem('pokemon'));
      if(pokResult){
        return of(pokResult);
      }
    }
    return this.pokApi.getPokemonDetails(pok);
  }

  getFavoritePokemons(){
    let favorites: Pokemon[] = [] ;
    if(localStorage.getItem('favorite-pokemons')){
      const favoritesLocal = JSON.parse(localStorage.getItem('favorite-pokemons'));
      if(favoritesLocal){
        favorites = favoritesLocal
      }
    }
    return of(favorites);
  }

  addToFavorite(pok: Pokemon){
    let favorites: Pokemon[] = [] ;
    if(localStorage.getItem('favorite-pokemons')){
      const favoritesLocal = JSON.parse(localStorage.getItem('favorite-pokemons'));
      if(favoritesLocal){
        favorites = favoritesLocal;
      }
    }
    favorites.push(pok);
  }

}
