import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

if (!localStorage.getItem("usuario")) {
  localStorage.setItem("usuario", JSON.stringify([]))
}

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nombre:String=''
  apellido:String=''
  email:String=''
  clave:String=''

  registrar(){
    const localUsu = JSON.parse(localStorage.getItem("usuario") || "[]")
    const usuarios ={
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      clave: this.clave
    }

    localUsu.push(usuarios)
    localStorage.setItem("usuario", JSON.stringify(localUsu))
    alert('Usuario registrado correctamente')
    
    
  }
 
  loginForm = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    clave: new FormControl('',[Validators.required])
  });



  validar() {
    if( this.loginForm.valid ){
      alert('formulario enviado')
      this.registrar()
    }else{
      alert('Campos vacios')
    }
  }
 
}