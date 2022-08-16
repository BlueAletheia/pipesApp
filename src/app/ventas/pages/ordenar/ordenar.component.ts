import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayusculas: boolean = true;


  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Dr Strange',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.rojo,
    },
  ];

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    console.log(valor);
  }
}
