export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    length(arg0: number, length: any): unknown;
    slice(startIndex: number, endindex: number): unknown;
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
