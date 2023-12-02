import { Component, OnInit, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
//Agrega los import necesarios
import { Firestore,addDoc, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-registrarlocal',
  templateUrl: './registrarlocal.page.html',
  styleUrls: ['./registrarlocal.page.scss'],
})
export class RegistrarlocalPage implements OnInit {

  nombre : any = '';
  tipo : any = '';
  ciudad : any = '';
  costo : any = '';
  chamos : any = '';

  notificar : boolean = false;
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: ' Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tab3']);
      },
    },
  ];
  constructor(
    private http : HttpClient,
    private route: Router
  ) { }
  // FUNCION DE REGRESAR LA PAGINA- BOTON 
  regresar() {
    // Utiliza el NavController para regresar a la página anterior
    this.route.navigate(['/tabs/tab3']);
  }
  ngOnInit() {
  }

  guardar() {
    let valores = {
      'nombre' : this.nombre,
      'tipo' : this.tipo,
      'ciudad' : this.ciudad,
      'costo' : this.costo,
      'chamos' : this.chamos
    }
    // let url = 'http://localhost:3000/locals/registrar';
    // this.http.post(url, valores)
    // .subscribe(data => {
    // console.log('respuesta', data);
      
    //   this.notificar = true;
      
    // })
    console.log(valores)

    addDoc(collection(this.firestore, "local"), valores);
    this.notificar = true;
    this.regresar()
  }
}
