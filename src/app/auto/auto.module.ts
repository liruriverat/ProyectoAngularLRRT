import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoRoutingModule } from './auto-routing.module';
import { ListadoAutoComponent } from './listado-auto/listado-auto.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarEditarAutosComponent } from './agregar-editar-autos/agregar-editar-autos.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoAutoComponent,
    AgregarEditarAutosComponent
  ],
  imports: [
    CommonModule,
    AutoRoutingModule,
    SharedModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class AutoModule { }
