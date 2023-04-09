import { Injectable } from '@angular/core';
import { PoljoprivrednaImovina } from './models/PoljoprivrednaImovina';
@Injectable({
  providedIn: 'root'
})
export class PoljoprivrednaImovinaService {
  private poljoprivrednaImovina: PoljoprivrednaImovina[] = [];

  getPoljoprivrednaImovina() {
    return this.poljoprivrednaImovina.slice();
  }

  dodajParcelu(parcela: {brojParcele: string, povrsina: number}) {
    this.poljoprivrednaImovina.push({
      brojParcele: parcela.brojParcele,
      povrsina: parcela.povrsina,
      plastenici: [],
      vrtovi: []
    });
  }

  obrisiParcelu(index: number) {
    this.poljoprivrednaImovina.splice(index, 1);
  }

  dodajPlastenikNaParcelu(index: number, plastenik: string) {
    this.poljoprivrednaImovina[index].plastenici.push({
      naziv: plastenik,
      proizvodi: []
    });
  }

  dodajVrtNaParcelu(index: number, vrt: string) {
    this.poljoprivrednaImovina[index].vrtovi.push({
      naziv: vrt,
      proizvodi: []
    });
  }

  dodajProizvodNaPlastenik(index: number, parcelaIndex: number, proizvod: string) {
    this.poljoprivrednaImovina[parcelaIndex].plastenici[index].proizvodi.push(proizvod);
  }

  dodajProizvodNaVrt(index: number, parcelaIndex: number, proizvod: string) {
    this.poljoprivrednaImovina[parcelaIndex].vrtovi[index].proizvodi.push(proizvod);
  }

  obrisiProizvodSaPlastenika(index: number, parcelaIndex: number, proizvod: string) {
    const proizvodIndex = this.poljoprivrednaImovina[parcelaIndex].plastenici[index].proizvodi.indexOf(proizvod);
    this.poljoprivrednaImovina[parcelaIndex].plastenici[index].proizvodi.splice(proizvodIndex, 1);
  }

  obrisiProizvodSaVrta(index: number, parcelaIndex: number, proizvod: string) {
    const proizvodIndex = this.poljoprivrednaImovina[parcelaIndex].vrtovi[index].proizvodi.indexOf(proizvod);
    this.poljoprivrednaImovina[parcelaIndex].vrtovi[index].proizvodi.splice(proizvodIndex, 1);
  }
}