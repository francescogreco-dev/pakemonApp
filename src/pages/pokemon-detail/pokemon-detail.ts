import { PokDataProvider } from './../../providers/pok-data/pok-data';
import { IPokemonDetails } from './../../app/models/pokemon-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pokemon } from './../../app/models/pokemon';

/**
 * Generated class for the PokemonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon-detail',
  templateUrl: 'pokemon-detail.html',
})
export class PokemonDetailPage {
  pok: Pokemon
  pokDetails: IPokemonDetails
  constructor(private pokData : PokDataProvider, public navParams: NavParams) {
    this.pok = navParams.get('pok');
    this.pokDetails = this.navParams.get('pokDetails');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

  addToFavorite(){
    this.pokData.addToFavorite(this.pok);
  }

}
