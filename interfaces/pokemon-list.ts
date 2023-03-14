export interface PokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonResult[];
}

export interface PokemonResult {
  id: number;
  name: string;
  url: string;
  img: string;
}
