import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    email: '',
    password: '',
    role: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(res => {
        Swal.fire('Login', `Usuario Logueado exitosamente`, 'success');

        console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/pages/home']);

      }, (err) => {
        // Si sucede un error
        console.log(err)
        Swal.fire('Login', `El email o la contraseña esta incorrecta`, 'error');
      });
  }

  registerNavigate() {
    this.router.navigate(['/auth/register']);

  }
}
