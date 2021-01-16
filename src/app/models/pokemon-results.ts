import { IPokemonData } from "./pokemon-data";

export interface IpokemonResult{
  count: number,
  previous: string,
  results: [IPokemonData],
  next: string
}
