import { Component, OnInit, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
//Agrega los import necesarios
import { Firestore,addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registraramigo',
  templateUrl: './registraramigo.page.html',
  styleUrls: ['./registraramigo.page.scss'],
})
export class RegistraramigoPage implements OnInit {

  nombre : any = '';
  telefono : any = '';
  cumpleanos : any = '';
  email : any = '';
  contrasena : any = '';

  notificar : boolean = false;
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: ' Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tab2']);
      },
    },
  ];  

  constructor(
    private http : HttpClient,
    private route: Router
  ) { }

  ngOnInit() {
  }

  guardar() {
    let valores = {
      'nombre' : this.nombre,
      'telefono' : this.telefono,
      'cumpleanos' : this.cumpleanos,
      'email' : this.email,
      'contrasena' : this.contrasena

    }
    // let url = 'http://localhost:3000/amigos/registrar';
    // this.http.post(url, valores)
    // .subscribe(data => {
    // console.log('respuesta', data);
      
    //   this.notificar = true;
      
    // })
    console.log(valores)

    addDoc(collection(this.firestore, "amigos"), valores);
    this.notificar = true;
  }

}
