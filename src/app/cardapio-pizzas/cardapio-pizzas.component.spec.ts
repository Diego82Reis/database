import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioPizzasComponent } from './cardapio-pizzas.component';

describe('CardapioPizzasComponent', () => {
  let component: CardapioPizzasComponent;
  let fixture: ComponentFixture<CardapioPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
