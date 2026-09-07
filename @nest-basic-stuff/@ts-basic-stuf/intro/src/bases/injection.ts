import type { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";
import { PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // TODO: inyectar dependencias

    private readonly http: PokeApiAdapter,
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    //un generico practicamente da a entender que tipo de dato vamos a trabajar. En este caso data va a ser de tipo Move[] (un arreglo de Moves)

    const data = await this.http.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`,
    );

    return data.moves;
  }
}

// Sustitución de Liskov: podemos sustituir una clase por otra, siempre y cuando ambas clases implementen la misma interfaz. En este caso, podemos sustituir PokeApiAdapter por PokeApiFetchAdapter, ya que ambas clases implementan el mismo método get<T>(url: string): Promise<T>.
const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const bulbasaur = new Pokemon(1, "Bulbasaur", pokeApi);
bulbasaur.getMoves();

export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);
charmander.getMoves();

console.log(bulbasaur);
console.log(charmander);

// Inyeccion a la clase una dependencia de otra clase, para que pueda usar sus metodos y propiedades, sin tener que crear una instancia de la clase dentro de la clase, sino que se le pasa como parametro en el constructor. Esto es lo que se conoce como inyeccion de dependencias.
