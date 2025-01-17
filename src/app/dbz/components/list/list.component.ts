import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    // se debe usar un eventEmitter de tipo number para usar este metodo
    this.onDelete.emit(index);
  }

  onDeleteCharacterById(id?: string): void {
    id ? this.onDeleteById.emit(id) : "";
  }
}
