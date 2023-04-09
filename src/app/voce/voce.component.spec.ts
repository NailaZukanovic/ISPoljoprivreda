import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceComponent } from './voce.component';

describe('VoceComponent', () => {
  let component: VoceComponent;
  let fixture: ComponentFixture<VoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
