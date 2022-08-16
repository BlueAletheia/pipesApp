import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  nombre: string = 'Alicia';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['Alicia', 'Jesús', 'Eduardo', 'Mimi', 'Mi Madre'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyvalue
  persona = {
    nombre: 'Alicia',
    edad: 24,
    direccion: 'mi casa',
  };

  //json
  heroes = [
    {
      nombre: 'Spiderman',
      vuela: false,
    },
    {
      nombre: 'Ironman',
      vuela: true,
    },
    {
      nombre: 'Dr Strange',
      vuela: true,
    },
  ];
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data promesa');
    }, 3500);
  });
}
