import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.page.html',
  styleUrls: ['./amigo.page.scss'],
})
export class AmigoPage implements OnInit {

  amigo : any = {}; 

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) {

      this.route.params.subscribe(params => {
        const amigo_id = params['id'];
        //llamamos nuevamente a todo el JSON de amigos
        this.http.get<any>('http://localhost:3000/amigos/detalle/'+ amigo_id)
        .subscribe(data => {
          console.log('amigos',data);
          this.amigo = data.amigo;
        })
        // Fin de llamada de amigos.json
      });
     }
  ngOnInit() {
  }

}
