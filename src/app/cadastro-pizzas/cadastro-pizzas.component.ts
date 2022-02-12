import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/Pizzas.model';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-cadastro-pizzas',
  templateUrl: './cadastro-pizzas.component.html',
  styleUrls: ['./cadastro-pizzas.component.css']
})
export class CadastroPizzasComponent implements OnInit {

  public pizza: Pizza = new Pizza(0, "","","",0);

  constructor(private _pizzasService: PizzasService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._pizzasService.cadastrarPizza(this.pizza).subscribe(
      pizza => {this.pizza = new Pizza(0,"","","",0)},
      err=> {console.log("erro ao cadastrar")}
    );
    window.location.href = "/cardapio";
  }
  
  atualizar(id: number){
    this._pizzasService.atualizarPizza(id,this.pizza).subscribe(
      pizza => {this.pizza = new Pizza(0,"","","",0)},
      err=> {console.log("erro ao atualizar")}
    );
    window.location.href = "/cardapio";
  }

  excluir(id: number){
  this._pizzasService.removerPizza(id).subscribe(
    pizza => {this.pizza = new Pizza(0,"","","",0)},
    err=> {console.log("erro ao excluir")}
  );
  window.location.href = "/cardapio";
  }
}