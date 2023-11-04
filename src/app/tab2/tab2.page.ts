import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  amigos : any = [];
  constructor(
    private http : HttpClient,
    private route: Router
    )
    {
    this.http.get<any>('http://localhost:3000/amigos/listado')
    .subscribe(data => {
      console.log('amigos', data);
      this.amigos = data.amigos;
    })
  }
  verDetalle(amigo:any){
    // console.log(amigo)
    this.route.navigate(['/amigo/'+amigo._id]);
  }

  registrar(){
    // console.log(evento)
    this.route.navigate(['/registraramigo/']);
  }
}
