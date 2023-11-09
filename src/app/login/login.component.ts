import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: String='';

  constructor(){

  }

  ngOnInit(): void{
    alert('Hola a mi web')
  }

  mostrarNombre(){
    this.nombre='Adios Imundos'
  }

}
