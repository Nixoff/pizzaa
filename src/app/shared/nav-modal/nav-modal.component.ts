import { PizzasService } from './../../resources/pizzas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.css']
})
export class NavModalComponent implements OnInit {

  constructor(private fb:FormBuilder, private pizzaService:PizzasService) { }

  formNovaPizza:FormGroup = this.fb.group({
    descricao:["",Validators.required],
    sabor:["",Validators.required],
    tamanho:["",Validators.required],
    valor:["",Validators.required],
    imgUrl:["https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg"]
    
  });

  ngOnInit(): void {
  }

  resetForm(){
    this.formNovaPizza.reset({tamanho:"0",imgUrl:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg"});
  }

  onSubmit(){
    if(!this.formNovaPizza.valid) {alert("campos invalidos"); return;};
    this.pizzaService.addPizza(this.formNovaPizza.value).subscribe(x => {
       console.log("adicionado");
    },error => console.log(error));
  }

}
