import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PesticidiService } from '../pesticidi.service';
@Component({
  selector: 'app-pesticidi',
  templateUrl: './pesticidi.component.html',
  styleUrls: ['./pesticidi.component.css']
})
export class PesticidiComponent implements OnInit {

  pesticidiForm: FormGroup = new FormGroup({});
  uspesnoPoslato: boolean = false;

  constructor(private pesticidiService: PesticidiService) { }

  ngOnInit(): void {
    this.pesticidiForm = new FormGroup({
      'ime': new FormControl(null, Validators.required),
      'prezime': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'telefon': new FormControl(null, Validators.required),
      'nazivPesticida': new FormControl(null, Validators.required),
      'kolicina': new FormControl(null, Validators.required)
    });
  }

  posaljiZahtev() {
    alert('Zahtev uspesno poslat');
    const zahtev = {
      ime: this.pesticidiForm.value.ime,
      prezime: this.pesticidiForm.value.prezime,
      email: this.pesticidiForm.value.email,
      telefon: this.pesticidiForm.value.telefon,
      nazivPesticida: this.pesticidiForm.value.nazivPesticida,
      kolicina: this.pesticidiForm.value.kolicina
    };
    this.pesticidiService.posaljiZahtev(zahtev).subscribe(
      (response) => {
        console.log(response);
        this.uspesnoPoslato = true;
        this.pesticidiForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}