import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Pacientes } from '../pacientes';

@Component({
  selector: 'app-guardar-paciente',
  templateUrl: './guardar-paciente.component.html',
  styleUrls: ['./guardar-paciente.component.css']
})
export class GuardarPacienteComponent implements OnInit {

  paci:Pacientes = new Pacientes();

  constructor(private paciservi:PacienteService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarPaciente(){
    this.paciservi.registrarPaciente(this.paci).subscribe(dato =>{
      this.router.navigate(["./Listar"]);
      console.log(dato);
    })
  }

  OnSubmit(){
    this.ejecutarguardarPaciente();
  }

}
