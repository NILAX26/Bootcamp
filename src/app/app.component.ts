import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimerDiaComponent,SegundoDiaComponent,TercerDiaComponent,ProyectoFinalComponent,GoogleMapsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dinamico ='hola padre'
  cr7 ='Cristiano Ronaldo'

  }

