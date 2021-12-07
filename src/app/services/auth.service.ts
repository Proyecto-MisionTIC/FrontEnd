import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://localhost:3000/empleados/"
  constructor(
    private http: HttpClient,
    private router : Router
  ) { }


  registrar(Empleado:any){

    return this.http.post(this.URL,Empleado)
    .subscribe(data => console.log(data))

  
}
}