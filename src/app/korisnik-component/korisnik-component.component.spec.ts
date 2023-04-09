import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikComponentComponent } from './korisnik-component.component';

describe('KorisnikComponentComponent', () => {
  let component: KorisnikComponentComponent;
  let fixture: ComponentFixture<KorisnikComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
