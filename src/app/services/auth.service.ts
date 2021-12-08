import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { modeloValidar } from '../models/validar.modelo';
import { ModeloEmpleado } from '../models/Empleados.modelo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://localhost:3000"
  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

    obtenerEmpleados() : Observable<ModeloEmpleado[]>{
      return this.http.get<ModeloEmpleado[]>(`${this.URL}/empleados`)

    }
 
    registrar(empleado : ModeloEmpleado): Observable<ModeloEmpleado>{
      console.log(empleado)
      return this.http.post<ModeloEmpleado>(`${this.URL}/empleados`,empleado,{
        headers : new HttpHeaders({})
      })
    }

  validar(Usuario:any): Observable<modeloValidar>{
    console.log(Usuario.Email)
    console.log(Usuario.Clave)
    return this.http.post<modeloValidar>(`${this.URL}/login`,{
      usuario : Usuario.Email,
      clave : Usuario.Clave
    },{
      headers: new HttpHeaders({})
    })

  }

  AlmacenarSesion(datos: modeloValidar){
    let token:any = datos.tk
    console.log(token)
    localStorage.setItem("token",token)
  }

  ObtenerTokenSesion(){
    let datosLocal = localStorage.getItem('token')

    if(datosLocal){
      let datos = JSON.parse(datosLocal);
      return datos
    }else{
      return null
    }
  }

  cerrarSesion(){
    localStorage.removeItem('token')
  }
}