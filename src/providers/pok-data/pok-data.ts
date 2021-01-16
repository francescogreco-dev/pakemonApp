import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { populateNodeData } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
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
    if (localStorage.getItem('pokemons')) {
      const pokResult = JSON.parse(localStorage.getItem('pokemons'));
      if (pokResult) {
        return of(pokResult);
      }
    }
    return this.pokApi.getPokemons();
  }

  getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails> {
    const storageID = 'pokemon-' + pok.name;
    if (localStorage.getItem(storageID)) {
      const pokResult = JSON.parse(localStorage.getItem(storageID));
      if (pokResult) {
        return of(pokResult);
      }
    }
    return this.pokApi.getPokemonDetails(pok);
  }

  getFavoritePokemons(filter: string) {
    let favorites: Pokemon[] = [];
    if (localStorage.getItem('favorite-pokemons')) {
      const favoritesLocal = JSON.parse(localStorage.getItem('favorite-pokemons'));
      if (favoritesLocal) {
        favorites = favoritesLocal;
        if (filter) {
          favorites = favorites.filter(pok => pok.name.startsWith(filter));
        }
      }
    }
    favorites.sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }
      return a.name > b.name ? 1 : -1;
    });
    return of(favorites);
  }

  addToFavorite(pok: Pokemon, add: boolean) {
    let favorites: Pokemon[] = [];
    if (localStorage.getItem('favorite-pokemons')) {
      const favoritesLocal = JSON.parse(localStorage.getItem('favorite-pokemons'));
      if (favoritesLocal) {
        favorites = favoritesLocal;
      }
    }
    if (add) {
      favorites.push(pok);
    } else {
      favorites = favorites.filter(res => res.name !== pok.name);
    }
    localStorage.setItem('favorite-pokemons', JSON.stringify(favorites));
  }

}
