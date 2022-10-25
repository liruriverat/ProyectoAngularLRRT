import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarAutosComponent } from './agregar-editar-autos/agregar-editar-autos.component';
import { ListadoAutoComponent } from './listado-auto/listado-auto.component';

const routes: Routes = [
{

  path:'',
  component:ListadoAutoComponent
},

{
  path:':id',
  component:AgregarEditarAutosComponent
} 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoRoutingModule { }
