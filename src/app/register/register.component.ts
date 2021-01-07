import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedDay: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit() { }
//event handler for the select element's change event
selectChangeHandler (event: any) {
  //update the ui
  this.selectedDay = event.target.value;
  console.log(this.selectedDay);
}
  onSubmit() {
    console.log("info form "+this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.prenom,
      this.form.date,
      this.form.tel,
      this.form.username,
      this.form.adress,
      this.form.email,
      this.form.password,
      this.selectedDay
      );
      console.log("sign up info "+this.signupInfo);
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log("data "+data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
