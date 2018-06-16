import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 15),
    new Ingredient('Orange', 50),
  ];


  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
  }
}
