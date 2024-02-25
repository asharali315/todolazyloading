import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(public _authService:AuthService) { }

  ngOnInit() {
    this.initFormGroup()
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._authService.signIn(this.loginForm.value)
      // You can perform further actions here, such as sending the data to your backend
      this.initFormGroup()
    } else {
      alert('Form is invalid!');
    }
  }

initFormGroup(){
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
}

}
