import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user = {
    role:'',
    name: '',
    lastname: '',
  };

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    Swal
    .fire({
        title: "Social soccer",
        text: "¿Estas seguro de cerrar sesion en este momento?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            console.log("*se cierra sesion*");
            Swal.fire('Admin', `Se cerro sesion correctamente gracias por su poreferencia UwU`, 'info');
            this.authService.logout();

        } else {
            // Dijeron que no
            console.log("*NO se se cierra sesion");
        }
    });
  }
}
