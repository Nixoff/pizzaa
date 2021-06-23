import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Pizza } from '../resources/pizza';
import { PizzasService } from '../resources/pizzas.service';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.css']
})
export class CardPizzaComponent implements OnInit {

  pizzas:any = [];
  
  constructor(private service: PizzasService, private fb: FormBuilder) { }

  cardsPizza: FormGroup = this.fb.group({
    pizzas: this.fb.array([])
  })

  createItem(id: any, name: any,opt:any, value: boolean = false): FormGroup {
    return this.fb.group({
      id: id,
      name: name,
      checked: value,
      opt:{...opt}
    });
  }

  ngOnInit(): void {
    this.service.list().subscribe(x => {
      if (x?.length > 0) {
        this.pizzas = this.cardsPizza.get('pizzas') as FormArray;
        x.forEach((a: any) => this.pizzas.push(this.createItem(a.id, a.sabor,a, false)));
        console.log(this.pizzas);
      }
    });
  }


  @HostListener('window:log', [])
  public log(): void {
    console.log(this.cardsPizza.get('pizzas') as FormArray);
  }



}
