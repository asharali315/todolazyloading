import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public taskEmitter : boolean = false
  constructor(public _authService:AuthService) { }

  ngOnInit(): void {
  }

  getTaskEmitter(data:boolean){
    this.taskEmitter = !this.taskEmitter;
  }


  logout(){
    this._authService.logout();
  }
}
