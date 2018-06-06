import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') prodName: ElementRef;
  @ViewChild('amountInput') prodAmount: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(this.prodName.nativeElement.value, this.prodAmount.nativeElement.value)
    )
  }

}
