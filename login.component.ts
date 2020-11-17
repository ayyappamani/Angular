import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: String;
  password!: String;

  credentials={email:"mani@gmail.com",password:"mani123"}
  constructor(

    private router: Router,
) {
}

ngOnInit() {

}
  onSubmit()
  {
    if(this.email==this.credentials.email && this.password==this.credentials.password)
    {console.log("Login Successfll");}
    this.router.navigate(['/user-dashboard/97070']);
    
  }
  

}
