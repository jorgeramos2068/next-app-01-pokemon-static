export interface PokemonListResponse {
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
