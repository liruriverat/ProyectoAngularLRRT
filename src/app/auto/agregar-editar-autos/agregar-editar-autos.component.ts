import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Autos } from 'src/app/models/autos.model';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-agregar-editar-autos',
  templateUrl: './agregar-editar-autos.component.html',
  styleUrls: ['./agregar-editar-autos.component.scss']
})
export class AgregarEditarAutosComponent implements OnInit {
formulario!:FormGroup;
id!:number;


  constructor(private fb:FormBuilder, 
    private servicioAuto:AutoService,
    private router:Router,
    private snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute
    ) 
  { }

  ngOnInit(): void {
    this.formulario= this.fb.group({
      marca:['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)] ],
      modelo:['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)] ],
    });

    this.id = this.activatedRoute.snapshot.params['id'] ?
              +this.activatedRoute.snapshot.params['id'] : 0 ;
    
    if(this.id!==0){
    this.llenarDatosAutos(this.id);
}

  }


  llenarDatosAutos(id:number){
    this.servicioAuto.getById(id)
        .subscribe((autos:Autos)=>{
          this.formulario.patchValue({
            ...autos
          })
    });
  }


  guardar(){
    const autos:Autos={
      ...this.formulario.value
    };
    if (this.id===0)
    this.agregar(autos);
    else 
    this.actualizar(autos)
  }

  agregar(autos:Autos){
    this.servicioAuto.save(autos).subscribe(response=>{
      //console.log('Se ha agregado mi categoría');
      this.snackBar.open('El auto fue agregado exitosamente', '', {
        duration:3000
      })
      this.router.navigate(['/auto']);
    })
  }


  actualizar(autos:Autos){
    this.servicioAuto
    .update(this.id,autos)
    .subscribe((response:any)=>{
      this.snackBar.open('El auto fue actualizado exitosamente','',{
        duration:3000
      } );
      this.router.navigate(['/auto']);
    })


  }

  getControlFormulario= (valor:string) => this.formulario.get(valor);

  get marca(){
    return this.getControlFormulario('marca');
  }


  get modelo(){
    return this.getControlFormulario('modelo');
  }

}
