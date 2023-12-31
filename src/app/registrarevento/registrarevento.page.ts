import { Component, OnInit, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
//Agrega los import necesarios
import { Firestore,addDoc, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-registrarevento',
  templateUrl: './registrarevento.page.html',
  styleUrls: ['./registrarevento.page.scss'],
})
export class RegistrareventoPage implements OnInit {

  nombre : any = '';
  fecha : any = '';
  lugar : any = '';
  notas : any = '';

  notificar : boolean = false;
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: ' Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tab1']);
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
    this.route.navigate(['/tabs/tab1']);
  }
  ngOnInit() {
  }

  guardar() {
    let valores = {
      'nombre' : this.nombre,
      'lugar' : this.lugar,
      'fecha' : this.fecha,
      'notas' : this.notas
    }
    // let url = 'http://localhost:3000/eventos/registrar';
    // this.http.post(url, valores)
    // .subscribe(data => {
    // console.log('respuesta', data);
      
    //   this.notificar = true;
      
    // })
    console.log(valores)

    addDoc(collection(this.firestore, "eventos"), valores);
    this.notificar = true;
    
  }
}
