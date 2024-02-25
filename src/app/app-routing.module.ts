import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Module/Page/todo/todo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  { path:'' , component : AuthComponent},
  { path:'login' , component : AuthComponent},
  { path: 'todo', loadChildren: () => import('./Module/todo/todo.module').then(m => m.TodoModule) },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
