export class Allele {
  id: string;
  isDominant: boolean;
  name: string;

  constructor(id: string, isDominant: boolean, name: string) {
    this.id = id;
    this.isDominant = isDominant;
    this.name = name;
  }
}
