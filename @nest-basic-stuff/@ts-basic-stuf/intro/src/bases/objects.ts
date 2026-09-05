export const pokemonIds = [1, 2, 30, 44, 33];

export const rapArtists = {
  id: 1,
  name: "JPEGMafia",
  age: 36,
  isValid: true,
}
//al compilar o transpilar, pasa de ts a js, y en js no hay tipos, por lo que no se puede hacer push de un string, pero en ts si, por eso es importante el tipado


interface RapArtist {
  id: number;
  name: string;
  age?: number | undefined;
  isValid: boolean;
}

export const kanye: RapArtist = {
  id: 2,
  name: "Kanye West",
  age: undefined,
  isValid: true,
}

