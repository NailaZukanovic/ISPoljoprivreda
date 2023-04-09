import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisnikComponentComponent } from './korisnik-component/korisnik-component.component';
import { PoljoprivrednaImovinaComponent } from './poljoprivredna-imovina/poljoprivredna-imovina.component';
import { PesticidiComponent } from './pesticidi/pesticidi.component';
import { HttpClientModule } from '@angular/common/http';
import { VoceComponent } from './voce/voce.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisnikComponentComponent,
    PoljoprivrednaImovinaComponent,
    PesticidiComponent,
    VoceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
