import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;
  public changedHero: boolean = false;
  public changedAge: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeHero(): void {
    this.changedHero = true;
    this.name = 'spiderMan';
  }

  changeAge(): void {
    this.changedAge = true;
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
    this.changedHero = false;
    this.changedAge = false;
  }


}
