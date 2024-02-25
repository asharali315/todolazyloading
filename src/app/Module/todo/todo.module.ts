import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../Page/todo/todo.component';
import { AddtodoComponent } from '../Component/addtodo/addtodo.component';
import { ListtodoComponent } from '../Component/listtodo/listtodo.component';
import { todoRoutingModule } from '../Routing/todo-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponent,
    AddtodoComponent,
    ListtodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    todoRoutingModule
  ]
})
export class TodoModule { }
