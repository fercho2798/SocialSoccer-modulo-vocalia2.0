import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email:'',
    password:'',
    name:'',
    lastname:''
  }
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/auth/login']);
        },
        err => console.log(err)
      )
  }

  LoginNavigate(){
    this.router.navigate(['/auth/login']);

  }
}
