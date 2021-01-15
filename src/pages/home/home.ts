import { PokemonApiProvider } from './../../providers/pokemon-api/pokemon-api';
import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Pokemon } from '../../app/models/pokemon';
import { IPokemonDetails } from '../../app/models/pokemon-details';
import { PokDataProvider } from './../../providers/pok-data/pok-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pokemons: [Pokemon];
  loading: any;

  constructor(public navCtrl: NavController, private pokeApi: PokDataProvider, private loadingCtrl: LoadingController) {
    this.presentLoading();
    pokeApi.getPokemons().subscribe((resp: [Pokemon]) => {
      this.loading.dismiss();
      this.pokemons = resp;
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

}
