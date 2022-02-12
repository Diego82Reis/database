import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../pizzas.service';
import { Pizza } from '../models/Pizzas.model';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-cardapio-pizzas',
  templateUrl: './cardapio-pizzas.component.html',
  styleUrls: ['./cardapio-pizzas.component.css']
})
export class CardapioPizzasComponent implements OnInit {

  public pizzas: Pizza[] = [];

  constructor(private _pizzasService: PizzasService) { }

  ngOnInit(): void {
    this.listarPizzas();
  }

  listarPizzas(){
    this._pizzasService.getPizzas()
    .subscribe(
      retornaPizza => {
        this.pizzas = retornaPizza.map(
          item => {
            return new Pizza(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.preco    
            );
          }
        )
      }
    )
  }

}