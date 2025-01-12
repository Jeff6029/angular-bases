// Lo ideal es primero colocar las importaciones de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// libreria de terceros
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

// ultimo nuestro codigo
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
