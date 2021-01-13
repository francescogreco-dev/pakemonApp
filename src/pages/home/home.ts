import { IpokemonResult } from './../../app/models/pokemon-results';
import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pokemon } from '../../app/models/pokemon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pokemons :[Pokemon];


  constructor(public navCtrl: NavController, pokeApi: PokemonApiProvider) {
    pokeApi.getPokemons().subscribe((resp : [Pokemon]) => {
      this.pokemons = resp;
    })
  }

}
