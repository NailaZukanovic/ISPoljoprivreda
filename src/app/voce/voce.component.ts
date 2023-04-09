import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VoceService } from '../voce.service';
@Component({
  selector: 'app-voce',
  templateUrl: './voce.component.html',
  styleUrls: ['./voce.component.css']
})
export class VoceComponent implements OnInit {

  voceForm = new FormGroup({
    vrsta: new FormControl(''),
    datumOd: new FormControl(''),
    datumDo: new FormControl('')
  });

  doprinos: number = 0;

  constructor(private voceService: VoceService) { }

  ngOnInit(): void {
  }

  izracunajDoprinos(): void {
    const vrsta = this.voceForm.get('vrsta')?.value;
    const datumOd = this.voceForm.get('datumOd')?.value;
    const datumDo = this.voceForm.get('datumDo')?.value;

    this.voceService.getOcekivaniDoprinos(vrsta, datumOd, datumDo).subscribe(
      (response) => {
        this.doprinos = response.doprinos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}