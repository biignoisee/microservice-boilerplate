export const pokemonIds = [1, 2, 30, 44, 33];
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

export const billyWoods: RapArtist = {
  id: 3,
  name: "Billy Woods",
  age: undefined,
  isValid: true,
}


// tipos de arreglos
export const rapArtists: RapArtist[] = [];
rapArtists.push(kanye);
rapArtists.push(billyWoods);
