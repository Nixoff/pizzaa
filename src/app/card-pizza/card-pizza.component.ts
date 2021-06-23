import { Component, OnInit } from '@angular/core';
import { Pizza } from '../resources/pizza';
import { PizzasService } from '../resources/pizzas.service';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.css']
})
export class CardPizzaComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private service: PizzasService) { }

  ngOnInit(): void {
    this.service.list().subscribe(x => this.pizzas = x);
  }

}
