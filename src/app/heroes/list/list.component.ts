import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  deletedHero?: string;

  public heroNames: string[] = [
    'Spiderman',
    'Hulk',
    'Thor',
    'Captain America'
  ];

  removeLastHero(): void {
    if (this.heroNames.length === 0  ){
      throw new Error('Ya no hay héroes para borrar');
    } else {
      this.deletedHero = this.heroNames.pop();
    }
  }
}
