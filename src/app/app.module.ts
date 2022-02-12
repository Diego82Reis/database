import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardapioPizzasComponent } from './cardapio-pizzas/cardapio-pizzas.component';
import { RouterModule } from '@angular/router';
import { CadastroPizzasComponent } from './cadastro-pizzas/cadastro-pizzas.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardapioPizzasComponent,
    CadastroPizzasComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
