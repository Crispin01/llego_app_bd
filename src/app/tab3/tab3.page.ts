import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  locals : Observable<any[]>;
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
    //TRAEMOS LOS localS DE FIREBASE
    const localCollection = collection(this.firestore,'local');
    this.locals = collectionData(localCollection, {
      idField: '_id'
    });

    //FIN DEL CONSTRUCTOR

    // this.http.get<any>('http://localhost:3000/locals/listado')
    // .subscribe(data => {
    //   console.log('locals', data);
    //   this.locals = data.locals;
    // })
  }
  verDetalle(local:any){
    // console.log(local)
    this.route.navigate(['/local/'+local._id]);
  }

  registrar(){
    // console.log(local)
    this.route.navigate(['/registrarlocal/']);
  }
}
