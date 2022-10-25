import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:"register",
    component:RegistroComponent
  },

  {
    path:'auto',
    loadChildren: ()=>
        import('./auto/auto.module')
        .then(m=>m.AutoModule)
  },
  {
    path:'',
    redirectTo:'auto',
    pathMatch:'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
