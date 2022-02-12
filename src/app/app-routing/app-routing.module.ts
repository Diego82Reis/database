import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CardapioPizzasComponent } from '../cardapio-pizzas/cardapio-pizzas.component';
import { CadastroPizzasComponent } from '../cadastro-pizzas/cadastro-pizzas.component';

const rotas: Routes = [
  {path: 'cardapio', component: CardapioPizzasComponent},
  {path: 'cadastro', component: CadastroPizzasComponent},
  {path: '', redirectTo: '../src/index.html', pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
