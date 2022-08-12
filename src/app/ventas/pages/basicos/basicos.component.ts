import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'alicia';
  nombreUpper: string = 'ALICIA';
  nombreCompleto: string = 'alIcia ferNaNDEz';

  fecha: Date = new Date(); //día de hoy
}
