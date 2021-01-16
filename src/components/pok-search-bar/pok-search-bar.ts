import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the PokSearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pok-search-bar',
  templateUrl: 'pok-search-bar.html'
})
export class PokSearchBarComponent {

text: string;

  constructor(private e: Events) {
    this.text = ""
    console.log('Hello PokSearchBarComponent Component');
  }

  onInput(e) {
    this.e.publish('pok-searched', this.text)
  }

  onCancel(e) {
    this.e.publish('pok-searched', this.text)
  }

}
