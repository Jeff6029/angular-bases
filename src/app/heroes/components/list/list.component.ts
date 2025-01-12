import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'ironMan', 'hulk', 'She Hulk', ' thor'];
  public deletedHero: string = '';
  public showBtnDelete: number = 1;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop() ?? '';
    this.heroNames.length > 0 ? this.showBtnDelete = 1 : this.showBtnDelete = 0;
  }

}
