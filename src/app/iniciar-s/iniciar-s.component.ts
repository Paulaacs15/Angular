import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-s',
  templateUrl: './iniciar-s.component.html',
  styleUrls: ['./iniciar-s.component.css']
})
export class IniciarSComponent implements OnInit {


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 
  loginForm = new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    clave: new FormControl('',[Validators.required])
  });



  validar() {
    if( this.loginForm.valid ){
      alert('formualario enviado')
    }else{
      alert('Campos vacios')
    }
  }
 
}
