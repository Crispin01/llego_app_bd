import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Firestore, collectionData, collection, docData, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  local : any = {}; 
  firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) {

      this.route.params.subscribe(params => {
        const local_id = params['id'];

        const local = doc(this.firestore, `local/${local_id}`);
        docData<any>(local).subscribe(data => {
          this.local = data;
        })

        //llamamos nuevamente a todo el JSON de locals
        // this.http.get<any>('http://localhost:3000/locals/detalle/'+ local_id)
        // .subscribe(data => {
        //   console.log('locals',data);
        //   this.local = data.local;
        // })
        // Fin de llamada de locals.json
      });
     }
  ngOnInit() {
  }

}
