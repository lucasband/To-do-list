import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
checklist: { label: string; checked: boolean }[] = [];

  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.checklist.push({ label: this.novaTarefa, checked: false });
      console.log('adicionando:', this.checklist.length)
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.checklist.splice(index, 1);
  }
}
