import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 checklist = [
    { label: 'Tarefa 1', checked: false },
    { label: 'Tarefa 2', checked: false },
    { label: 'Tarefa 3', checked: false }
  ];
  
}
