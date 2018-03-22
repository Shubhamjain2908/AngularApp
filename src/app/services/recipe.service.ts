import {Recipe} from "../recipes/recipe-list/recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable()
export class RecipeService{

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
}
