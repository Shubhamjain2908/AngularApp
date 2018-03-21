import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{

  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples',12),
    new Ingredient('Orange', 32 )
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    // for (let ing of this.ingredients) {
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

}
