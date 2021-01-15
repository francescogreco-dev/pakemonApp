import { Pokemon } from './../../app/models/pokemon';
import { Observable } from 'rxjs/Observable';
import { PokDataProvider } from './../../providers/pok-data/pok-data';
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favorites$ : Observable<Pokemon[]>

  constructor(private pokData : PokDataProvider) {
  }

  ionViewDidLoad() {
    this.favorites$ = this.pokData.getFavoritePokemons();
    console.log('ionViewDidLoad FavoritePage');
  }

}
