import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService],

})
export class AdminComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  addUser(form?: NgForm) {
    if (form.value._id) {
      Swal.fire('Admin', `Se actualizo exitosamente`, 'success');

      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getUsers();
      },(err)=>{
        console.log(err)
        Swal.fire('', ``, 'error');
      });
    }else{
        Swal.fire('Administrador', `Edite un Usuario para poder actualizar`, 'error');
      }
    }


  getUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
      this.userService.users = res;
    },  err =>{    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this.router.navigate(['/signin']);
      }
    }}
    );
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm) {


    Swal
    .fire({
        title: "Admin",
        text: "¿Estas seguro de eliminar el usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            console.log("*se elimina el usuario*");
            Swal.fire('Admin', `Se borro exitosamente`, 'success');
            this.userService.deleteUser(_id).subscribe((res) => {
              this.getUsers();
              this.resetForm(form);
            });
        } else {
            // Dijeron que no
            console.log("*NO se elimina el usuario");
        }
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
}
