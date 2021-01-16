import { Pokemon } from './../../app/models/pokemon';
import { Observable } from 'rxjs/Observable';
import { PokDataProvider } from './../../providers/pok-data/pok-data';
import { Component } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { IPokemonDetails } from '../../app/models/pokemon-details';
import { NavController } from 'ionic-angular';
import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';

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

  favorites$: Observable<Pokemon[]>
  loading: any;

  constructor(
    public navCtrl: NavController,
    private evt: Events,
    private pokData: PokDataProvider,
    private pokeApi: PokDataProvider,
    private loadingCtrl: LoadingController,
  ) {
    evt.subscribe('pok-searched', res => {
      // this.filterPok(res);
      this.reloadPoks(res);
    })
    this.evt.subscribe('favorite-added', () => {
      this.reloadPoks('');
    })
  }

  reloadPoks(filter: string) {
    this.favorites$ = this.pokData.getFavoritePokemons(filter);
  }

  ionViewDidLoad() {
    //this.favorites$ = this.pokData.getFavoritePokemons();
    this.reloadPoks('');
  }

  showPokDetail(pok: Pokemon) {
    this.pokeApi.getPokemonDetails(pok).subscribe(
      (res: IPokemonDetails) => {
        this.presentLoading();
        this.navCtrl.push('PokemonDetailPage', { pokDetails: res, pok: pok });
      }
    )
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Attendere...',
      dismissOnPageChange: true
    });

    this.loading.present();

    // setTimeout(() => {
    //   this.loading.dismiss();
    // }, 5000);
  }

  // filterPok(filter: string) {
  //   this.reloadPoks(filter);
  //   // if (filter.length === 0) {
  //   //   this.pokemons = this.allPoks;
  //   //   return;
  //   // }
  //   // this.pokemons = this.pokemons.filter(pok => pok.name.startsWith(filter));
  // }

}
