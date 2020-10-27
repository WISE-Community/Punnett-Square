import { Allele } from "./allele";

export class Target {
  id: string;
  allele?: Allele;

  constructor(id: string, allele?: Allele) {
    this.id = id;
    this.allele = allele;
  }
}
