import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formLogin : FormGroup
  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private toastr : ToastrService
    ) 
  { 
    this.formLogin = this.fb.group({

      Email : ['',Validators.required],
      Clave: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion(){

    const Usuario = {

      Email: this.formLogin.get('Email')?.value,
      Clave: this.formLogin.get('Clave')?.value
    }

    this.auth.validar(Usuario)
    .subscribe({
      next: (data:any) => {
        this.auth.AlmacenarSesion(data)
        alert("Datos correctos")
      },
      error : () =>{
        this.toastr.warning("Correo y/o Contraseña invalidos")     
        this.formLogin.reset()
      }
    })
    console.log(Usuario)
  }

}
