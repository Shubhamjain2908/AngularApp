import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  // used for resolving copy error
  ingredientsChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',12),
    new Ingredient('Orange', 32 )
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  getIngredients (index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    // for (let ing of this.ingredients) {
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  updateIngredient (index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteIngredient (index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }

}
