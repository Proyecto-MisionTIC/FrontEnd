import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formLogin : FormGroup
  constructor(
    private fb : FormBuilder
  ) { 
    this.formLogin = this.fb.group({

      Email : ['',Validators.required],
      clave: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion(){

    const Usuario = {

      Email: this.formLogin.get('Email')?.value,
      Clave: this.formLogin.get('Clave')?.value
    }

    console.log(Usuario)
  }

}
