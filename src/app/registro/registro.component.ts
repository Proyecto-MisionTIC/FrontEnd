import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModeloEmpleado } from '../models/Empleados.modelo';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro : FormGroup
  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private toastr: ToastrService,
    private router: Router
    ) 
  { 
    this.formRegistro = fb.group({

      nombre : ['',Validators.required],
      apellido: ['',Validators.required],
      telefono : ['',Validators.required],
      direccion : ['',Validators.required],
      correo: ['',Validators.required],
      contraseña : ['',Validators.required],
      edad: ['',Validators.required],
      fecha : ['',Validators.required],
      sueldo : ['',Validators.required],
      
    })
  }

  ngOnInit(): void {
  }

  registrarEmpleado(){

    const Empleado : ModeloEmpleado = {
      
      Nombres : this.formRegistro.get('nombre')?.value,
      Apellidos : this.formRegistro.get('apellido')?.value,
      Telefono : this.formRegistro.get('telefono')?.value,
      Direccion : this.formRegistro.get('direccion')?.value,
      Email : this.formRegistro.get('correo')?.value,
      Clave : this.formRegistro.get('contraseña')?.value,
      Edad: this.formRegistro.get('edad')?.value,
      fechaNacimiento : this.formRegistro.get('fecha')?.value,
      Sueldo : this.formRegistro.get('sueldo')?.value,
      esDirectivo: 0,
      esCliente : 0,
      empresaId : '619007c23f23321a7cd9d409',
    } 

    this.auth.registrar(Empleado)
    .subscribe({
      next: () =>{
        this.toastr.success("Registro Exitoso")
        this.router.navigate(['login'])
      },
      error: (error) =>{

        this.toastr.info("El Usuario Ya se encuentra registrado")
        this.formRegistro.reset()
      }
    })
  }

}
