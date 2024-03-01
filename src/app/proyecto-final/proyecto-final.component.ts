import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,GoogleMapsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  usuarios: any = []
id: any=[]
  position: any ={}
   formulariouser:FormGroup = new FormGroup({
    name: new FormControl(''),
     description: new FormControl(''),
     id: new FormControl('')
   })
name=''
description=''
ubicacion=''


getcoords(event:any){
  this.position = {
  lat: event.latLng.lat(),
  lng: event.latLng.lng(),
  }
}
submitForm(){
  let obj={
  ...this.formulariouser.value, 
  position: this.position
  }
  this.usuarios.push(obj);
  this.id.inde

// this.formulariouser.controls['name'].disable()
// console.log( );
console.log(this.formulariouser.value);
} 
}