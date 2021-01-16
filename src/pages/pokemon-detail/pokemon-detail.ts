import { PokDataProvider } from './../../providers/pok-data/pok-data';
import { IPokemonDetails } from './../../app/models/pokemon-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pokemon } from './../../app/models/pokemon';
import { Events } from 'ionic-angular';

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
  isFavorite: boolean = false
  constructor(
    private evt: Events,
    private pokData: PokDataProvider,
    public navParams: NavParams,
    private navCtrl: NavController
  ) {
    this.pok = navParams.get('pok');
    this.pokDetails = this.navParams.get('pokDetails');
  }

  ionViewDidLoad() {
    this.pokData.getFavoritePokemons('').subscribe(res => {
      const pok = res.filter(pokEle => pokEle.name === this.pok.name);
      this.isFavorite = pok.length > 0 ? true : false;
    })
  }

  addToFavorite() {
    this.isFavorite = !this.isFavorite;
    this.pokData.addToFavorite(this.pok, this.isFavorite);
    this.evt.publish('favorite-added', this.pok);
    if (this.isFavorite === true) {
      this.navCtrl.parent.select(1);
    }
  }

}
