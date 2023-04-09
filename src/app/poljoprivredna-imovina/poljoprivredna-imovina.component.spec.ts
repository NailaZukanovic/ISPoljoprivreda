import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoljoprivrednaImovinaComponent } from './poljoprivredna-imovina.component';

describe('PoljoprivrednaImovinaComponent', () => {
  let component: PoljoprivrednaImovinaComponent;
  let fixture: ComponentFixture<PoljoprivrednaImovinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoljoprivrednaImovinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoljoprivrednaImovinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
