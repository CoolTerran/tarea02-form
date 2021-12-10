import { Component } from '@angular/core';

import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personaArr: Persona[] = [
    { id: 1, nombre: 'Alguien', fecha: '01/01/2021', dni: 12345678, tipodoc: 'DNI', motivo: 'Salud' },
    { id: 2, nombre: 'Alguien más', fecha: '12/31/2021', dni: 87654321, tipodoc: 'DNI', motivo: 'Enfermedad' }
  ];
  
  persona: Persona = new Persona();

  guardar() {

    if(this.persona.id === 0) {
      this.persona.id = this.personaArr.length + 1;
      this.personaArr.push(this.persona);
    }

    this.persona = new Persona();
  }

  editar(persona: Persona) {
    this.persona = persona;
  }
}
