import { IPokemonData } from "./pokemon-data"

export class Pokemon {
  name: string = ''
  img: string = ''
  id: number = 0
  // private spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  private spriteUrl = 'assets/pokemon/'

  constructor(pok: IPokemonData) {
    this.name = pok.name;
    const pieces = pok.url.split('/');
    this.id = +pieces[pieces.length - 2];
    this.img = this.spriteUrl + this.id + '.png';
  }
}
