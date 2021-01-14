import { IPokemonDetails } from './../../app/models/pokemon-details';
import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private pokApi: PokemonApiProvider) {
    this.pok = navParams.get('pok');
    this.pokDetails = this.navParams.get('pokDetails');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
