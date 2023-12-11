import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfae';

import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: "Krilin",
    power: 1000
  },{
    id: uuid(),
    name: "Goku",
    power: 9500
  }];


  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  addCharacter(character: Character): void {

    const newCharacter: Character = ({id: uuid(), ...character})

    this.characters.push(newCharacter);
  }

}
