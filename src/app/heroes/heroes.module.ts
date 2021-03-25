import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  //componentes que contengan este modulo, este es un arreglo
  declarations : [
    HeroeComponent,
    ListadoComponent
  ],
  //componentes, servicios, etc, que seran visibles afuera de este modulo
  exports: [
    ListadoComponent,
  ],
  imports: [
    //sirve para las directivas
    CommonModule

  ],
})

export class HeroesModule{}
