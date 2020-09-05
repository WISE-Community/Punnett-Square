export class Allele {
  isDominant: boolean;
  name: string;

  constructor(isDominant: boolean, name: string) {
    this.isDominant = isDominant;
    this.name = name;
  }
}
