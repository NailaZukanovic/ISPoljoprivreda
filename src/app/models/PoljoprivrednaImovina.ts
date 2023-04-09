export interface PoljoprivrednaImovina {
  brojParcele: string;
  povrsina: number;
  plastenici: {
    naziv: string;
    proizvodi: string[];
  }[];
  vrtovi: {
    naziv: string;
    proizvodi: string[];
  }[];
}