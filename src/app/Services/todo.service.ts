import { Injectable } from '@angular/core';
import { Tasks } from '../Model/tasks';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  editTodo$ = new BehaviorSubject<Tasks>({id:0,task:'',isCompleted:false}); // herer <here goes type we can use multiple types>
  constructor() { }


  addTodo(todoItem : Tasks){
    const count = this.todo[this.todo.length-1].id +1;
    this.todo.push({...todoItem,id:count});
  }

 removeToDoItem(id : number){
  let index = -1;
  index =  this.todo.findIndex((index :Tasks) => index.id == id);
  
  if(index <0) return
  
 this.todo = this.todo.splice(index,1);
}


editTodo(todoItem : Tasks){
  const index = this.todo.findIndex((task : Tasks) => task.id === todoItem?.id);
  if (index !== -1) {
    this.todo[index] = { ...todoItem };
  }

}


getTodoItems(){
  return this.todo;
}

  public todo : Tasks[] = [
    {id:1,task : 'Wake up early',isCompleted : false},
    {id:2,task : 'Get ready as scheduled',isCompleted : false},
  ]
}
