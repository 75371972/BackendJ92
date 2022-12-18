import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Pacientes } from '../pacientes';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  listaPaciente:Pacientes[];
  constructor(private paciservi:PacienteService) { 
  }

  ngOnInit(): void {
    this.ejecutarServicioObtener();
  }

  private ejecutarServicioObtener (){
    this.paciservi.obtenerPaciente().subscribe(dato => {
        this.listaPaciente=dato;
      }
      )
  }

  eliminarPaciente(idpaciente:number){
    this.paciservi.eliminarPaciente(idpaciente).subscribe(dato =>{
      this.ejecutarServicioObtener();
    });
  
  }

}
