import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPruebaComponent } from './lista-prueba/lista-prueba.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';



@NgModule({
  declarations: [
    ListaPruebaComponent,
    MensajeConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    ListaPruebaComponent,
    MaterialDesignModule,
    MensajeConfirmacionComponent

  ]
})
export class SharedModule { }
