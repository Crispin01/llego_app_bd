import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Firestore, collectionData, collection, docData, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento : any = {}; 
  firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) {

      this.route.params.subscribe(params => {
        const evento_id = params['id'];

        const evento = doc(this.firestore, `eventos/${evento_id}`);
        docData<any>(evento).subscribe(data => {
          this.evento = data;
        })

        //llamamos nuevamente a todo el JSON de eventos
        // this.http.get<any>('http://localhost:3000/eventos/detalle/'+ evento_id)
        // .subscribe(data => {
        //   console.log('eventos',data);
        //   this.evento = data.evento;
        // })
        // Fin de llamada de eventos.json
      });
     }
  ngOnInit() {
  }

}
