import { Personaje } from '../interfaces/dbz.interface';
import { Injectable } from "@angular/core";

@Injectable()

export class DbzService
{
  [x: string]: any;
  private _personajes: Personaje[]=[
    {
        nombre: 'Goku',
        poder : 10000
    },
    {
      nombre: 'Vegeta',
      poder: 7000
    },
    {
      nombre: 'Trunks',
      poder:30000
    }
    ];

    get perosnajes(): Personaje[]
    {
      return [...this._personajes];
    }
    constructor(){}

    agregarNuevoPersonaje(personaje:Personaje){
      this._personajes.push(personaje);
      }

}
