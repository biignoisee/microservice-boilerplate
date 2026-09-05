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
  constructor(
    public readonly id: number,
    public name: string
  ) { }
}



export const lilWayne = new Artist(1, "Lil Wayne");
export const drDre = new Producers(1, "Dr. Dre");
