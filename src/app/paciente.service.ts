import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacientes } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  private URLbase = "http://localhost:8081/apiRest"

  constructor(private httpClient:HttpClient) { 
  }

  obtenerPaciente():Observable<Pacientes[]>{
    return this.httpClient.get<Pacientes[]>(`${this.URLbase+'/pacientes/obtener'}`)
  }

  registrarPaciente(paci:Pacientes):Observable<object>{
    return this.httpClient.post(`${this.URLbase +'/pacientes/insertar'}`,paci)
  }

  eliminarPaciente (id:number):Observable<object>{
    return this.httpClient.delete(`${this.URLbase +'/pacientes/eliminar'}/${id}`);
  }
}
