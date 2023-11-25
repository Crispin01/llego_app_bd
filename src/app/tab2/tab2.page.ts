import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  amigos : Observable<any[]>;
  firestore: Firestore = inject(Firestore);
  constructor(
    private http : HttpClient,
    private route: Router
    )
    {

      //VALIDAMOS SI ESTAMOS LOGEADOS
    let user = localStorage.getItem('user');
    if (user == null) {
      this.route.navigate(['/login/']);
    }
    //TRAEMOS LOS AMIGOS DE FIREBASE
    const amigoCollection = collection(this.firestore,'amigos');
    this.amigos = collectionData(amigoCollection, {
      idField: '_id'
    });

    //FIN DEL CONSTRUCTOR

    // this.http.get<any>('http://localhost:3000/amigos/listado')
    // .subscribe(data => {
    //   console.log('amigos', data);
    //   this.amigos = data.amigos;
    // })
  }
  verDetalle(amigo:any){
    // console.log(amigo)
    this.route.navigate(['/amigo/'+amigo._id]);
  }

  registrar(){
    // console.log(amigo)
    this.route.navigate(['/registraramigo/']);
  }
}
