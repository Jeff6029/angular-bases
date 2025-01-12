// manualmente escribimos:∫

// import { Component } from "@angular/core";


// @Component({
//   selector: 'app-counter',
//   // templateUrl: './counter.component.html',
//   template: '<h1>Hola desde contador</h1>',
//   standalone: false,
//   // styleUrl: './counter.component.css'
// })
// export class CounterComponent {

// }





// si escribes :   a-component     y das a "tab", esto te creará lo de abajo, siempre tendrás que editar los nombres de las clases y archivos
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Hola desde contador</p>
  <h2>Counter:  {{ counter }} </h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: false,
})
export class CounterComponent  {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
