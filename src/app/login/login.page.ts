import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string = '';
  contrasena : string = '';

  constructor(
    // SOLO VA LO QUE YO QUIERO QUE FUNCIONE/DEFINA
    private route: Router
  ) {
    
  }
   ingresar(){
    localStorage.setItem('user',this.email);
    this.route.navigate(['/']);
  }
  ngOnInit() {
  }

  
}
