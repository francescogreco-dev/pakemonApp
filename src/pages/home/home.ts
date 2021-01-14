import { IPokemonData } from './../../app/models/pokemon-data';
import { IpokemonResult } from './../../app/models/pokemon-results';
import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pokemon } from '../../app/models/pokemon';
import { IPokemonDetails } from '../../app/models/pokemon-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pokemons: [Pokemon];


  constructor(public navCtrl: NavController, private pokeApi: PokemonApiProvider) {
    pokeApi.getPokemons().subscribe((resp: [Pokemon]) => {
      this.pokemons = resp;
    })
  }

  showPokDetail(pok: Pokemon) {
    this.pokeApi.getPokemonDetails(pok).subscribe(
      (res: IPokemonDetails) => {
        this.navCtrl.push('PokemonDetailPage', { pokDetails: res , pok: pok });
      }
    )
  }

}
