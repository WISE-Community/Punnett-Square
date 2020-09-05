import { Allele } from './allele';

export class Parent {
  id: string;
  title: string;
  allele1: Allele;
  allele2: Allele;

  constructor(id: string, title: string, allele1: Allele, allele2: Allele) {
    this.id = id;
    this.title = title;
    this.allele1 = allele1;
    this.allele2 = allele2;
  }
}
