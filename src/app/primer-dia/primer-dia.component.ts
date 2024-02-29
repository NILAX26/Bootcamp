import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
@Input()ejemplo:String= ''
@Input()ejemplo2:String= ''
  card ={
    title: 'Titulo Principal',
    description: "Esta es mi primera pagina de bootcamp",
  }
}

