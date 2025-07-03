import { Component } from '@angular/core';
import { Task } from 'src/app/models/task-model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  checklist: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.checklist.push({ label: this.newTask, checked: false });
      console.log('adicionando:', this.checklist.length) // Teste de Aumento de array
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.checklist.splice(index, 1);
    console.log('removendo:', this.checklist.length) // Teste de Diminuição de array
  }
}
