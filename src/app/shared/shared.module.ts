import { PizzasService } from './../resources/pizzas.service';
import { NavModalComponent } from './nav-modal/nav-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[NavModalComponent],
  providers:[PizzasService]
})
export class SharedModule { }
