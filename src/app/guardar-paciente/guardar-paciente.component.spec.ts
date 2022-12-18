import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarPacienteComponent } from './guardar-paciente.component';

describe('GuardarPacienteComponent', () => {
  let component: GuardarPacienteComponent;
  let fixture: ComponentFixture<GuardarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
