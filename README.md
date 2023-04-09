# Pesticidi

Informacioni sistem za praćenje prinosa poljoprivrednog dobra se sastoji od nekoliko korisnika.
Korisnik(Ime, Prezime, Email, DatumRođenja, BrojTelefona, Pol, KorisničkoIme, Password)
ima mogućnost unosa i upravljanja informacija o svojoj poljoprivrednoj imovini (parcele(broj parcele, površina)
koje poseduje, na svakoj parceli plastenike i vrtove, za svaki plastenik ili vrt koja poljoprivredna dobra je
posadio).
Svako poljoprivredno dobro se karakteriše Id, Nazivom, Sortom, ŽivotniVek(u godinama), DatumSadnice,
VremeSazrevanja(vremenski izraženo u godinama kada počinje da daje plod od datuma sađenja), minimalni i
maksimalni potencijal davanja  godišnje kao i listu pesticida koje se smeju prskati na njemu.
Korisnik može pregledati koliki je očekivani doprinos od neke voćke za period koji izabere. Osim za jednu
voćku korisnik može pregledati i za izabrani vrt ili plastenik, kao i za veći broj izabranih vrtova i
plastenika.
Korisnik može poslati zahtev za subvencije za kupovinu pesticida gde će navesti koje pesticide
želi da nabavi. Taj zahtev obrađuje službenik.
Službenik (Ime, Prezime, Email, DatumRođenja, BrojTelefona, StručnaSprema, KorisničkoIme, Password) može da:
- potvrdi registrovane korisnike.
- pregleda postojeće korisnike i filtrira listu po (ime i prezime, datumRođenja, Pol)
- pregleda pristigle zahteve i oceni ih kao prihvaćene ili odbijene. Pristigli zahtevi treba da budu
obojeni zelenom bojom ako su ispravni, odnosno crvenom ako ima greška (greška bi bila da korisnik traži
pesticid a ni jedno njegovo poljoprivredno dobro ne sme da koristi taj pesticid). Tom prilikom službenik
ovog korisnika označava kao nepouzadnog i njemu se postavlja zabrana apliciranja na godinu dana od dana
prijave.
- unosi, pregleda, menja i briše listu pesticida i sorti koje mogu da koriste taj pesticid.

![image](https://user-images.githubusercontent.com/86067688/230790538-f2d4b530-e320-4c17-8019-186ef4e1eb61.png)
