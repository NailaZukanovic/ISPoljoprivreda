import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Korisnik } from '../models/Korisnik';
@Component({
  selector: 'app-korisnik-component',
  templateUrl: './korisnik-component.component.html',
  styleUrls: ['./korisnik-component.component.css']
})
export class KorisnikComponentComponent implements OnInit {

  productForm!: FormGroup;
  constructor( private FormBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.productForm = this.FormBuilder.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      email: ['', Validators.required],
      datumRodjenja: ['', Validators.required],
      brojTelefona: ['', Validators.required],
      pol: ['', Validators.required],
      korisnickoIme: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
