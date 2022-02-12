import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './models/Pizzas.model';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private url = "http://localhost:3000/pizzas";

  constructor(private _httpClient: HttpClient) { }

  getPizzas(): Observable<Pizza[]>{
    return this._httpClient.get<Pizza[]>(this.url);
  }

  cadastrarPizza(pizza: Pizza): Observable<Pizza[]>{
    return this._httpClient.post<Pizza[]>(this.url, pizza);
  }

  atualizarPizza(id:any, pizza: Pizza): Observable<Pizza[]>{
    const urlAtualizar = '${this.url}/${id}';
    return this._httpClient.put<Pizza[]>(urlAtualizar, pizza);
  }

  removerPizza(id:any): Observable<Pizza[]>{
    const urlDeletar = '${this.url}/${id}';
    return this._httpClient.delete<Pizza[]>(urlDeletar);
  }

}
