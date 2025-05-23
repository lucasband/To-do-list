import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  checklist = [
    { label: '', checked: false },
  ];

  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.checklist.push({ label: this.novaTarefa, checked: false });
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.checklist.splice(index, 1);
  }
}
