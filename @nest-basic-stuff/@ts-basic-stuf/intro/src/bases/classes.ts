import axios from "axios";

// representacion de un objeto de la vida real, con propiedades y metodos
export class Artist {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

}


//another form
export class Producers {

  get imageUrl(): string {
    return `https://example.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // public imageUrl?: string
  ) { }

  // ----------------------
  // Métodos
  // ----------------------

  public scream() {
    console.log(`Hi, I'm ${this.name.toUpperCase()}!!!!`);
  }

  //public
  speak() {
    console.log(`Hi, I'm ${this.name}`);
  }

  // Async
  async getMoves() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
    const moves = data.moves;
    return moves;
  }
}

// public se puede acceder desde cualquier lugar
// private solo se puede acceder desde la clase
// protected se puede acceder desde la clase y sus subclases

export const lilWayne = new Artist(1, "Lil Wayne");
export const drDre = new Producers(11, "Dr. Dre");

drDre.speak(); // Hi, I'm Dr. Dre
drDre.scream(); // Hi, I'm DR. DRE!!!!

console.log(drDre.getMoves().then(moves => console.log(moves)))
