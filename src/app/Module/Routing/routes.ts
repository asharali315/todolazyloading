import { Routes } from "@angular/router";
import { TodoComponent } from "../Page/todo/todo.component";
import { AuthGuard } from "src/app/gaurds/auth.guard";

 export const routes: Routes = [
    { path:'' , component : TodoComponent,canLoad: [AuthGuard]}
  
  ];
  