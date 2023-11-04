import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registraramigo',
  templateUrl: './registraramigo.page.html',
  styleUrls: ['./registraramigo.page.scss'],
})
export class RegistraramigoPage implements OnInit {

  nombre : any = '';
  telefono : any = '';
  cumpleanos : any = '';

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    let data = {
      'nombre' : this.nombre,
      'telefono' : this.telefono,
      'cumpleanos' : this.cumpleanos
    }
    console.log(data)
  }

}
