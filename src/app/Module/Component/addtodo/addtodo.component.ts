import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tasks } from 'src/app/Model/tasks';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  @Output() taskEmitter = new EventEmitter<boolean>();
  public task:Tasks  = {
    id:0,

    task : '',
    isCompleted : false
  }
  isEditing : boolean = false

  constructor(public _todoService :TodoService){}


  ngOnInit(): void {
    this._todoService.editTodo$.subscribe((task:Tasks)=>{
      if(task.id !=0)
      this.isEditing = true
     
      this.task = task
    });
  }


  onSubmit(form: NgForm) {
    if(!this.isEditing){
    this.task = {
      id:0,
      task : form.value.title,
      isCompleted : false
    };
    this._todoService.addTodo(this.task);
  }else{
    this._todoService.editTodo(this.task);
    this.isEditing = false
  }
    
    this.taskEmitter.emit(true);
    
    this.initTask();
  }

  initTask(){
    this.task = {
      id:0,
      task : '',
      isCompleted : false
    }
  }
}
