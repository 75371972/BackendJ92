import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarPacienteComponent } from './guardar-paciente/guardar-paciente.component';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';

const routes: Routes = [
  {path:"Listar",component:ListaPacienteComponent},
  {path:"", redirectTo:"Listar",pathMatch:"full"}, //Redirigir a una pagina
  {path:"Guardar",component:GuardarPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
