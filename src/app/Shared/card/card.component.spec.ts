import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [FormsModule, MatIconModule, MatCheckboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar uma nova tarefa válida', () => {
    component.newTask = 'Estudar Angular';
    component.addTask();
    expect(component.checklist.length).toBe(1);
    expect(component.checklist[0].label).toBe('Estudar Angular');
  });

  it('não deve adicionar tarefa em branco', () => {
    component.newTask = '   ';
    component.addTask();
    expect(component.checklist.length).toBe(0);
  });

  it('deve remover uma tarefa', () => {
    component.checklist = [
      { label: 'Estudar', checked: false },
      { label: 'Testar', checked: false },
    ];
    component.removeTask(0);
    expect(component.checklist.length).toBe(1);
    expect(component.checklist[0].label).toBe('Testar');
  });
});