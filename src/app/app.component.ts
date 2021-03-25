import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
  numero: number = 0;

  sumar()
  {
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

  acumular(valor: number)
  {
    this.numero += valor;
  }

  //8. tarea con el contador

  base: number =10;
}
