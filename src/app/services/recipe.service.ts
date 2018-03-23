import {Recipe} from "../recipes/recipe-list/recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  // used to fix the unsaved bug
  recipeChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Dummy RECIPE',
      'This is a test RECIPE',
      'https://www.nautilusplus.com/content/uploads/2016/08/Pexel_junk-food.jpeg',
      [
        new Ingredient('Burger',3),
        new Ingredient('french fries',20)
      ]),
    new Recipe(
      'Test RECIPE',
      'This is a dummy RECIPE',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
      [
        new Ingredient('Coke',1),
        new Ingredient('Shake',2)
      ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipes(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());    // passing copy of new/updated array
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());    // passing copy of new/updated array
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
