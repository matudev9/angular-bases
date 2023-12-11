import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfae';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   // TODO: emitir id del personaje
  //   this.onDelete.emit(index);
  //   console.log(index);
  // }

  onDeleteCharacter(id?: string): void {
    // TODO: emitir id del personaje

    if( !id ) return;

    this.onDelete.emit(id);
    console.log(id);

  }

}
