import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tasks } from 'src/app/Model/tasks';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit,OnChanges {
  public tasks : Tasks[] = []
  @Input() isAddOrEdit : boolean = false
  
  constructor(public _todoService:TodoService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isAddOrEdit']){
      this.getTasks();
    }

  }

  ngOnInit(): void {
    this.getTasks();
  }

  EditTask(task:Tasks){
  this._todoService.editTodo$.next(task);
  }

  markDone(task:Tasks){
  task.isCompleted = true
  this._todoService.editTodo(task);
  this.getTasks()
  }

  getTasks(){
    this.tasks = this._todoService.getTodoItems();
  }

}
