import { NgModule } from '@angular/core';
import { PokSearchBarComponent } from './pok-search-bar/pok-search-bar';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [PokSearchBarComponent],
	imports: [IonicModule, CommonModule],
	exports: [PokSearchBarComponent]
})
export class PokSearchBarModule {}
