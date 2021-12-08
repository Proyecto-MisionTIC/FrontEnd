import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModeloEmpleado } from '../models/Empleados.modelo';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private auth: AuthService) { }

  listaEmpleados :ModeloEmpleado[] = [];
  ngOnInit(): void {
  this.listarEmpleados()
  }


  listarEmpleados(){
    this.auth.obtenerEmpleados()
    .subscribe({
      next: (datos:ModeloEmpleado[]) =>{
        this.listaEmpleados = datos
      }
    })
  }

}
