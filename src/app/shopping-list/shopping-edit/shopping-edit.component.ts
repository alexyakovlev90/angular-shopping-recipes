import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') prodName: ElementRef;
  @ViewChild('amountInput') prodAmount: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    const ingredient = new Ingredient(this.prodName.nativeElement.value, this.prodAmount.nativeElement.value);
    this.slService.addIngredient(ingredient);
  }

}
