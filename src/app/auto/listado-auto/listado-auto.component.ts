import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Autos } from 'src/app/models/autos.model';
import { AutoService } from 'src/app/services/auto.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-auto',
  templateUrl: './listado-auto.component.html',
  styleUrls: ['./listado-auto.component.scss']
})
export class ListadoAutoComponent implements OnInit {
auto:Autos[]=[];
lsColumnas:string[]=['id','marca','modelo', 'acciones'];
mensaje = 'Hola prueba de Angular';


  constructor(private servicioAuto:AutoService,  
    private snackBar:MatSnackBar,
    private dialog:MatDialog
    ) {
    }
   

  ngOnInit(): void {
    this.servicioAuto.get().subscribe(response=>{
      console.log(response);
      this.auto=response;
  });

  }



  eliminar(autos:Autos){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está segur@ que desea eliminar la categoría ${autos.marca}?`
      }
    });
  
    dialogRef.afterClosed().subscribe(result=>{
      if(result==='Si'){
  
        this.servicioAuto.delete(autos.id)
        .subscribe((response)=>{                      
          this.snackBar.open('¡El auto fue eliminado con éxito!','',{
            duration:3000
          });
          this.cargarAutos();
        }) 
  
      }
    });
    
  }

  cargarAutos(){
    this.servicioAuto.get().subscribe(response=>{
      this.auto=response;
    });
    
    }



}
