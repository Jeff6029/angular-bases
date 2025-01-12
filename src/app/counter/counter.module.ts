import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    // Le decimos al mundo que puede usar este componente
    CounterComponent
  ]
})
export class CounterModule {}
