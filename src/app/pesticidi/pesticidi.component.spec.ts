import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticidiComponent } from './pesticidi.component';

describe('PesticidiComponent', () => {
  let component: PesticidiComponent;
  let fixture: ComponentFixture<PesticidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesticidiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesticidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
