import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is the test',
      'https://www.illucit.com/assets/images/angular.png',
      [new Ingredient('Meat', 1), new Ingredient('bread', 2)]
    ),
    new Recipe(
      'Another recipe',
      'This is the test',
      'https://www.illucit.com/assets/images/angular.png',
      [new Ingredient('Banana', 1), new Ingredient('Apple', 2)]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
