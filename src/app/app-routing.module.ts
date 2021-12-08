import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'register',
      component:RegistroComponent
    },
    {
      path:'empleados',
      component: EmpleadosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
