import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
}
