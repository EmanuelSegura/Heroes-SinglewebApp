import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
// El input le dice a Angular que una propiedad que yo quiero especificar va a ser recibida desde afuera.

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}; //El decorador @input indica que PUEDE venir de afuera.
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<number>;
              //Que va a emitir? En este caso, el numero index que recibe.

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter(); //Inicializamos el eventemitter.
  }

  ngOnInit() {
  }

  verHeroe(){
  // console.log(this.index);
  this.router.navigate(['/heroe',this.index])
  // this.heroeSeleccionado.emit(this.index) //Emitimos el numero index.
  
  }

}
