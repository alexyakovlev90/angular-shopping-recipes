import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A test recipe',
      'This is the test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
      [new Ingredient('Meat', 1), new Ingredient('bread', 2)]
    ),
    new Recipe(
      2,
      'Another recipe',
      'This is the test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
      [new Ingredient('Banana', 1), new Ingredient('Apple', 2)]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id - 1];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
