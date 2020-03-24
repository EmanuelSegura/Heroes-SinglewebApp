import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';





@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = []; //Creamos un arreglo para mostrar los resultados
  termino:string; //Para poder utilizar {{termino}} en el html

  constructor(private activatedRoute:ActivatedRoute,       //Importamos el activated route.
              private _heroesService:HeroesService) {


   }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params =>{
       this.termino = params['termino']; //Para poder utilizar {{termino}} en el html
       console.log(params['termino']);

        this.heroes = this._heroesService.buscarHeroes(params['termino']); //Llenamos el arreglo usando el servicio.
        console.log(this.heroes); //Para ver los resultados de la busqueda
        
     });
  }


}
