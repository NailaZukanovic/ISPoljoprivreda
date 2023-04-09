import { Component } from '@angular/core';
import { PoljoprivrednaImovinaService } from '../poljoprivredna-imovina.service';
import { PoljoprivrednaImovina } from '../models/PoljoprivrednaImovina';
@Component({
  selector: 'app-poljoprivredna-imovina',
  templateUrl: './poljoprivredna-imovina.component.html',
  styleUrls: ['./poljoprivredna-imovina.component.css']
})
export class PoljoprivrednaImovinaComponent {
  poljoprivrednaImovina: PoljoprivrednaImovina[] = [];
  parcela: {brojParcele: string, povrsina: number} = {brojParcele:"", povrsina:0};
  brojParcele: string = '';
  povrsina: number = 0;
  constructor(private poljoprivrednaImovinaService: PoljoprivrednaImovinaService) {
    this.parcela.brojParcele = this.brojParcele;
    this.parcela.povrsina = this.povrsina;
  }

  ngOnInit() {
    this.poljoprivrednaImovina = this.poljoprivrednaImovinaService.getPoljoprivrednaImovina();
  }

  dodajParcelu() {
    this.poljoprivrednaImovinaService.dodajParcelu(this.parcela);
    alert('Uspesno dodata parcela');
  }

  obrisiParcelu(index: number) {
    this.poljoprivrednaImovinaService.obrisiParcelu(index);
  }

  dodajPlastenikNaParcelu(index: number, plastenik: string) {
    this.poljoprivrednaImovinaService.dodajPlastenikNaParcelu(index, plastenik);
  }

  dodajVrtNaParcelu(index: number, vrt: string) {
    this.poljoprivrednaImovinaService.dodajVrtNaParcelu(index, vrt);
  }

  dodajProizvodNaPlastenik(index: number, parcelaIndex: number, proizvod: string) {
    this.poljoprivrednaImovinaService.dodajProizvodNaPlastenik(index, parcelaIndex, proizvod);
  }

  dodajProizvodNaVrt(index: number, parcelaIndex: number, proizvod: string) {
    this.poljoprivrednaImovinaService.dodajProizvodNaVrt(index, parcelaIndex, proizvod);
  }

  obrisiProizvodSaPlastenika(index: number, parcelaIndex: number, proizvod: string) {
    this.poljoprivrednaImovinaService.obrisiProizvodSaPlastenika(index, parcelaIndex, proizvod);
  }

  obrisiProizvodSaVrta(index: number, parcelaIndex: number, proizvod: string) {
    this.poljoprivrednaImovinaService.obrisiProizvodSaVrta(index, parcelaIndex, proizvod);
  }
}
