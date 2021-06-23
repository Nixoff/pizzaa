import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private readonly API = 'https://pizzaria-rest.herokuapp.com/api/pizzas';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Pizza[]>(this.API);
  }

  addPizza(pizza:Pizza){
    return this.http.post(this.API,pizza);
  }
}
