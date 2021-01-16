import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import { LoadingController, NavController, Events } from 'ionic-angular';
import { Pokemon } from '../../app/models/pokemon';
import { IPokemonDetails } from '../../app/models/pokemon-details';
import { PokDataProvider } from './../../providers/pok-data/pok-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pokemons: Pokemon[];
  allPoks: Pokemon[];
  loading: any;

  constructor(
    public navCtrl: NavController,
    private pokeApi: PokDataProvider,
    private loadingCtrl: LoadingController,
    evt: Events
  ) {
    evt.subscribe('pok-searched', res => {
      this.filterPok(res);
    })
    this.presentLoading();
    pokeApi.getPokemons().subscribe((resp: [Pokemon]) => {
      this.loading.dismiss();
      this.pokemons = resp.sort((a, b) => {
        if (a.name === b.name) {
          return 0;
        }
        return a.name > b.name ? 1 : -1;
      });
      this.allPoks = this.pokemons.slice();
    })
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

  filterPok(filter: string) {
    //if (filter.length === 0) {
      this.pokemons = this.allPoks;
      //return;
    //}
    this.pokemons = this.pokemons.filter(pok => pok.name.startsWith(filter));
  }

}
