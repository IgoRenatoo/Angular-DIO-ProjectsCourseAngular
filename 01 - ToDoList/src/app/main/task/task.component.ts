import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

export interface ITask {
  taskTitle: string
  taskDescription: string
  taskStatus: string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: ITask[] = []
  taskTitle: string = ''
  taskDescription: string = ''
  taskStatus: string = 'pendente'

  onClick () {
    if (this.taskTitle && this.taskDescription) {
      this.tasks.push({ taskTitle: this.taskTitle, taskDescription: this.taskDescription, taskStatus: this.taskStatus })

      alert(JSON.stringify(this.tasks))
      this.taskTitle = ''
      this.taskDescription = ''
      this.taskStatus = 'pendente'

    } else {
      alert('Por favor, preencha todos os campos!')
    }
  }
  onEdit (id: number) {
    alert('Pendente desenvolvimento da lógica...')
  }
  onDelete (id: number) {
    this.tasks.splice(id, 1)
  }
}
